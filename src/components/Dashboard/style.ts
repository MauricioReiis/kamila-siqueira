import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DashboardSection = styled.section`
  padding: 4.5rem 2rem;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SectionLabel = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

export const Subtitle = styled.p`
  max-width: 42rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.7;
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCard = styled(motion.div)`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  text-align: center;

  strong {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 1.35rem;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ChartCard = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.85rem;
  }
`;

export const ChartHeader = styled.div`
  margin-bottom: 0.75rem;

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.85rem;
  }
`;

export const ChartLegend = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.78rem;
  }

  i,
  b {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.2rem;
    display: inline-block;
  }

  i {
    background: ${({ theme }) =>
      theme.colors.background === '#0A0A0A'
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(0, 0, 0, 0.2)'};
  }

  b {
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

export const ChartRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

export const ChartRow = styled.div`
  display: grid;
  grid-template-columns: minmax(7rem, 12rem) 1fr auto;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
`;

export const ChartLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
`;

export const BarsWrap = styled.div`
  display: grid;
  gap: 0.25rem;
`;

export const BarTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 62.4375rem;
  background: ${({ theme }) =>
    theme.colors.background === '#0A0A0A'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.06)'};
  overflow: hidden;
`;

export const BarBefore = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${({ theme }) =>
    theme.colors.background === '#0A0A0A'
      ? 'rgba(255, 255, 255, 0.28)'
      : 'rgba(0, 0, 0, 0.22)'};
`;

export const BarAfter = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${({ theme }) => theme.colors.gradient};
`;

export const ChartGrowth = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #2e7d32;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-self: end;
  }
`;

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const CompanyCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const CompanyHeader = styled.header`
  padding: 1rem 1.25rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) =>
    theme.colors.background === '#0A0A0A'
      ? 'rgba(255, 255, 255, 0.02)'
      : 'rgba(0, 0, 0, 0.015)'};

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9rem;
    margin-bottom: 0.15rem;
  }

  small {
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 0.8rem;
  }
`;

export const MetricsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
    font-size: 0.875rem;
  }

  th {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.colors.textDark};
  }

  td {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    th,
    td {
      padding: 0.65rem 0.55rem;
      font-size: 0.79rem;
    }

    th {
      font-size: 0.65rem;
    }
  }
`;

export const ImpactBadge = styled.span<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.55rem;
  border-radius: 62.4375rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ $positive }) => ($positive ? '#2E7D32' : '#C62828')};
  background: ${({ $positive }) => ($positive ? 'rgba(76, 175, 80, 0.12)' : 'rgba(229, 57, 53, 0.12)')};
`;
