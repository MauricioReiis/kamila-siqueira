import * as S from './style';
import { useDashboard } from './controller';

export const DashboardView: React.FC = () => {
  const { ref, inView, companies, overview, chartData, formatMetricValue, formatVariation } = useDashboard();

  return (
    <S.DashboardSection id="impacto" ref={ref}>
      <S.Container>
        <S.Header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <S.SectionLabel>Impacto em números</S.SectionLabel>
          <S.Title>Antes e depois da estratégia aplicada</S.Title>
          <S.Subtitle>
            Alguns exemplos reais de clientes após a aplicação da nossa estratégia, mostrando de forma clara o antes e depois em receita, eficiência e geração de oportunidades.
          </S.Subtitle>
        </S.Header>

        <S.OverviewGrid>
          {overview.map((item, index) => (
            <S.OverviewCard
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * index }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </S.OverviewCard>
          ))}
        </S.OverviewGrid>

        <S.ChartCard
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <S.ChartHeader>
            <h3>Comparativo de Receita</h3>
          </S.ChartHeader>

          <S.ChartLegend>
            <span><i /> Antes</span>
            <span><b /> Depois</span>
          </S.ChartLegend>

          <S.ChartRows>
            {chartData.map((row) => (
              <S.ChartRow key={row.id}>
                <S.ChartLabel>{row.label}</S.ChartLabel>
                <S.BarsWrap>
                  <S.BarTrack>
                    <S.BarBefore style={{ width: `${row.beforePct}%` }} />
                  </S.BarTrack>
                  <S.BarTrack>
                    <S.BarAfter style={{ width: `${row.afterPct}%` }} />
                  </S.BarTrack>
                </S.BarsWrap>
                <S.ChartGrowth>{row.growthLabel}</S.ChartGrowth>
              </S.ChartRow>
            ))}
          </S.ChartRows>
        </S.ChartCard>

        <S.CompanyGrid>
          {companies.map((company, companyIndex) => (
            <S.CompanyCard
              key={company.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * companyIndex }}
            >
              <S.CompanyHeader>
                <h3>{company.segment}</h3>
                <small>Tempo de implementação: {company.implementationTime}</small>
              </S.CompanyHeader>

              <S.MetricsTable>
                <thead>
                  <tr>
                    <th>Indicador</th>
                    <th>Antes</th>
                    <th>Depois</th>
                    <th>Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  {company.metrics.map((metric) => {
                    const impact = formatVariation(metric);

                    return (
                      <tr key={`${company.id}-${metric.key}`}>
                        <td>{metric.label}</td>
                        <td>{formatMetricValue(metric, metric.before)}</td>
                        <td>{formatMetricValue(metric, metric.after)}</td>
                        <td>
                          <S.ImpactBadge $positive={impact.positive}>{impact.value}</S.ImpactBadge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </S.MetricsTable>
            </S.CompanyCard>
          ))}
        </S.CompanyGrid>
      </S.Container>
    </S.DashboardSection>
  );
};
