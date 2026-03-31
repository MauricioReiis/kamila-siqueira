import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { dashboardCompanies } from '../../models/data';
import type { DashboardMetric } from '../../models/types';

const getVariation = (metric: DashboardMetric) => {
  if (metric.before === 0) return 0;
  return ((metric.after - metric.before) / metric.before) * 100;
};

const isPositiveImpact = (metric: DashboardMetric, variation: number) => {
  if (metric.betterWhen === 'lower') return variation < 0;
  return variation > 0;
};

const formatVariation = (metric: DashboardMetric) => {
  const variation = getVariation(metric);
  const absVariation = Math.abs(variation).toFixed(0);
  const sign = variation > 0 ? '+' : variation < 0 ? '-' : '';

  return {
    value: `${sign}${absVariation}%`,
    positive: isPositiveImpact(metric, variation),
  };
};

const formatMetricValue = (metric: DashboardMetric, value: number) => {
  if (metric.format === 'currency') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  }

  if (metric.format === 'percent') {
    return `${value.toFixed(1).replace('.', ',')}%`;
  }

  if (metric.format === 'multiplier') {
    return `${value.toFixed(1).replace('.', ',')}x`;
  }

  return new Intl.NumberFormat('pt-BR').format(value);
};

export const useDashboard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const overview = useMemo(() => {
    const revenueGrowthAvg = dashboardCompanies
      .map((company) => company.metrics.find((metric) => metric.key === 'revenue'))
      .filter((metric): metric is DashboardMetric => Boolean(metric))
      .reduce((acc, metric) => acc + getVariation(metric), 0) / dashboardCompanies.length;

    const leadsGrowthAvg = dashboardCompanies
      .map((company) => company.metrics.find((metric) => metric.key === 'leads'))
      .filter((metric): metric is DashboardMetric => Boolean(metric))
      .reduce((acc, metric) => acc + getVariation(metric), 0) / dashboardCompanies.length;

    const cacReductionAvg = dashboardCompanies
      .map((company) => company.metrics.find((metric) => metric.key === 'cac'))
      .filter((metric): metric is DashboardMetric => Boolean(metric))
      .reduce((acc, metric) => acc + Math.abs(getVariation(metric)), 0) / dashboardCompanies.length;

    return [
      { id: 'revenue', label: 'Crescimento médio de receita', value: `+${revenueGrowthAvg.toFixed(0)}%` },
      { id: 'leads', label: 'Aumento médio de leads', value: `+${leadsGrowthAvg.toFixed(0)}%` },
      { id: 'cac', label: 'Redução média de CAC', value: `-${cacReductionAvg.toFixed(0)}%` },
    ];
  }, []);

  const chartData = useMemo(() => {
    const rows = dashboardCompanies
      .map((company) => {
        const revenueMetric = company.metrics.find((metric) => metric.key === 'revenue');
        if (!revenueMetric) return null;

        const growth = getVariation(revenueMetric);

        return {
          id: company.id,
          label: company.segment,
          before: revenueMetric.before,
          after: revenueMetric.after,
          growthLabel: `${growth >= 0 ? '+' : ''}${growth.toFixed(0)}%`,
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item));

    const maxValue = rows.reduce((max, row) => Math.max(max, row.after, row.before), 0);

    return rows.map((row) => ({
      ...row,
      beforePct: maxValue > 0 ? (row.before / maxValue) * 100 : 0,
      afterPct: maxValue > 0 ? (row.after / maxValue) * 100 : 0,
    }));
  }, []);

  return {
    ref,
    inView,
    companies: dashboardCompanies,
    overview,
    chartData,
    formatMetricValue,
    formatVariation,
  };
};
