import { useTargetAudience } from "./controller";
import * as S from "./style";

export const TargetAudienceView: React.FC = () => {
  const { ref, inView, label, title, subtitle, scenarios, disclaimer } =
    useTargetAudience();

  return (
    <S.TargetAudienceSection id="para-quem-e" ref={ref}>
      <S.Container
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <S.SectionHeader>
          <S.SectionLabel>{label}</S.SectionLabel>
          <S.SectionTitle>{title}</S.SectionTitle>
          <S.SectionSubtitle>{subtitle}</S.SectionSubtitle>
        </S.SectionHeader>

        <S.ScenariosGrid>
          {scenarios.map((scenario: string, index: number) => (
            <S.ScenarioCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <S.ScenarioText>{scenario}</S.ScenarioText>
            </S.ScenarioCard>
          ))}
        </S.ScenariosGrid>

        <S.DisclaimerBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: scenarios.length * 0.1 }}
        >
          <S.DisclaimerText>{disclaimer.notFor}</S.DisclaimerText>
          <S.DisclaimerText $highlight>{disclaimer.forWho}</S.DisclaimerText>
        </S.DisclaimerBox>
      </S.Container>
    </S.TargetAudienceSection>
  );
};
