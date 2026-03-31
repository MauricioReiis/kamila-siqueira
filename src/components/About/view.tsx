import { useAbout } from './controller';
import profileImg from '../../assets/ks-foto-perfil.jpeg';
import * as S from './style';

export const AboutView: React.FC = () => {
  const {
    imageRef,
    imageInView,
    contentRef,
    contentInView,
    title,
    paragraphs,
    values,
  } = useAbout();

  return (
    <S.AboutSection id="about">
      <S.AboutContainer>
        <S.AboutImageWrapper
          ref={imageRef}
          initial={{ opacity: 0, x: -60 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <S.AboutImagePlaceholder>
            <S.AboutImage draggable={false} src={profileImg} alt="Kamila Siqueira — Estrategista de Marketing" loading="lazy" width={350} height={420} />
          </S.AboutImagePlaceholder>
          <S.ExperienceBadge>
            <strong>+4</strong>
            <span>Anos de experiência</span>
          </S.ExperienceBadge>
        </S.AboutImageWrapper>

        <S.AboutContent
          ref={contentRef}
          initial={{ opacity: 0, x: 60 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <S.SectionLabel>Sobre</S.SectionLabel>
          <S.SectionTitle>{title}</S.SectionTitle>

          {paragraphs.map((paragraph, index) => (
            <S.AboutText key={index}>{paragraph}</S.AboutText>
          ))}

          <S.ValuesGrid>
            {values.map((value, index) => (
              <S.ValueTag
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {value}
              </S.ValueTag>
            ))}
          </S.ValuesGrid>
        </S.AboutContent>
      </S.AboutContainer>
    </S.AboutSection>
  );
};