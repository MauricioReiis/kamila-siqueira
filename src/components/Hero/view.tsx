import { Sparkles } from 'lucide-react';
import { Button } from '../Button';
import { useHero } from './controller';
import * as S from './style';

export const HeroView: React.FC = () => {
  const { displayText, isTypingComplete, highlight, subtitle, cta } = useHero();

  return (
    <S.HeroSection id="home">
      <S.HeroContainer>
        <S.HeroContent>
          <S.HeroGreeting>
            {displayText}
            {!isTypingComplete && <S.Cursor />}
          </S.HeroGreeting>
          <S.HeroTitle>
            <span>{highlight}</span>
          </S.HeroTitle>
          <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>
          <Button href="#contact" size="lg">
            {cta}
          </Button>
        </S.HeroContent>

        <S.HeroImageWrapper>
          <S.HeroImagePlaceholder>
            <S.PlaceholderText>KS</S.PlaceholderText>
          </S.HeroImagePlaceholder>
          <S.FloatingBadge>
            <S.BadgeIcon>
              <Sparkles size={20} />
            </S.BadgeIcon>
            <S.BadgeText>
              <strong>+500 projetos</strong>
              <span>Marcas transformadas</span>
            </S.BadgeText>
          </S.FloatingBadge>
        </S.HeroImageWrapper>
      </S.HeroContainer>

      <S.ScrollIndicator>scroll</S.ScrollIndicator>
    </S.HeroSection>
  );
};
