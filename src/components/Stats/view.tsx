import { useStats } from "./controller";
import * as S from "./style";

export const StatsView: React.FC = () => {
  const { ref, inView, stats, formatValue } = useStats();

  return (
    <S.StatsSection>
      <S.StatsContainer>
        <S.StatsHeader>
          <S.SectionLabel>Resultados</S.SectionLabel>
          <S.SectionTitle>Mais que números. Resultados reais.</S.SectionTitle>
          <S.SectionSubtitle>
            Alguns exemplos reais de clientes após a aplicação da estratégia —
            antes e depois em receita, eficiência e geração de oportunidades.
          </S.SectionSubtitle>
        </S.StatsHeader>

        <S.StatsGrid ref={ref}>
          {stats.map((stat, index) => (
            <S.StatCard
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <S.StatValue>{formatValue(index)}</S.StatValue>
              <S.StatLabel>{stat.label}</S.StatLabel>
            </S.StatCard>
          ))}
        </S.StatsGrid>
      </S.StatsContainer>
    </S.StatsSection>
  );
};
