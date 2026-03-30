import { Sparkles, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '../Button';
import { useHero } from './controller';
import heroVideo from '../../assets/ks-apresentacao.mp4';
import * as S from './style';

export const HeroView: React.FC = () => {
  const { displayText, highlight, subtitle, cta, videoRef, isMuted, isPlaying, progress, duration, toggleMute, togglePlay, handleSeek } = useHero();

  return (
    <S.HeroSection id="home">
      <S.HeroContainer>
        <S.HeroContent>
          <S.HeroGreeting>
            {displayText}
          </S.HeroGreeting>
          <S.HeroTitle>
            <span>{highlight}</span>
          </S.HeroTitle>
          <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>
          <Button href="/proposta" size="lg">
            {cta}
          </Button>
        </S.HeroContent>

        <S.HeroImageWrapper>
          <S.HeroImagePlaceholder>
            <S.HeroVideo
              ref={videoRef}
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
            />
            <S.VideoControls>
              <S.VideoControlsRow>
                <S.VideoControlButton onClick={togglePlay} aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </S.VideoControlButton>
                <S.VideoControlButton onClick={toggleMute} aria-label={isMuted ? 'Ativar som' : 'Mutar vídeo'}>
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </S.VideoControlButton>
              </S.VideoControlsRow>
              <S.VideoProgressBar
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={progress}
                onChange={handleSeek}
                aria-label="Progresso do vídeo"
              />
            </S.VideoControls>
          </S.HeroImagePlaceholder>
          <S.FloatingBadge>
            <S.BadgeIcon>
              <Sparkles size={20} />
            </S.BadgeIcon>
            <S.BadgeText>
              <strong>+300 projetos</strong>
              <span>Entregues</span>
            </S.BadgeText>
          </S.FloatingBadge>
        </S.HeroImageWrapper>
      </S.HeroContainer>

      <S.ScrollIndicator>scroll</S.ScrollIndicator>
    </S.HeroSection>
  );
};
