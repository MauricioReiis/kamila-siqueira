import { Sparkles, Play, Pause, Volume2, VolumeX, Gauge } from 'lucide-react';
import { Button } from '../Button';
import { useHero } from './controller';
import * as S from './style';

export const HeroView: React.FC = () => {
  const {
    highlight,
    subtitle,
    cta,
    videoRef,
    progressBarRef,
    ytContainerRef,
    ytWrapperRef,
    ytProgressBarRef,
    isPlaying,
    isMuted,
    isYtMuted,
    isYtPlaying,
    showThumbnail,
    progress,
    ytProgress,
    isVideoLoaded,
    useFallback,
    playbackSpeed,
    togglePlay,
    toggleMute,
    toggleYtMute,
    toggleYtPlay,
    handleSeek,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleYtSeek,
    handleYtTouchStart,
    handleYtTouchMove,
    handleYtTouchEnd,
    cycleSpeed,
  } = useHero();

  return (
    <S.HeroSection id="home">
      <S.HeroContainer>
        <S.HeroContent>
          <S.HeroTitle>
            <span>{highlight}</span>
          </S.HeroTitle>
          <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>
          <Button href="/proposta" size="lg">
            {cta}
          </Button>
        </S.HeroContent>

        <S.HeroImageWrapper>
          <S.HeroImagePlaceholder ref={ytWrapperRef}>
            <S.YouTubeContainer>
              <div ref={ytContainerRef} />
            </S.YouTubeContainer>

            <S.YtThumbnail $visible={showThumbnail} onClick={toggleYtPlay}>
              <S.KsThumbnailBg />
              <S.KsMonogramRow>
                <S.KsMonogramK>K</S.KsMonogramK><S.KsMonogramS>S</S.KsMonogramS>
              </S.KsMonogramRow>
              <S.KsDivider />
              <S.KsName>Estrategista de Marketing</S.KsName>
              <S.YtPlayOverlay>
                <Play size={22} fill="white" strokeWidth={0} />
              </S.YtPlayOverlay>
              <S.KsTagline>Aperte o play</S.KsTagline>
            </S.YtThumbnail>

            {!showThumbnail && (
              <S.DesktopControls>
                <S.ButtonsRow>
                  <S.DesktopControlButton onClick={toggleYtPlay} aria-label={isYtPlaying ? 'Pausar' : 'Reproduzir'}>
                    {isYtPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </S.DesktopControlButton>
                  <S.DesktopControlButton onClick={toggleYtMute} aria-label={isYtMuted ? 'Ativar som' : 'Silenciar'}>
                    {isYtMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </S.DesktopControlButton>
                </S.ButtonsRow>
                <S.ProgressBar
                  ref={ytProgressBarRef}
                  onClick={handleYtSeek}
                  onTouchStart={handleYtTouchStart}
                  onTouchMove={handleYtTouchMove}
                  onTouchEnd={handleYtTouchEnd}
                >
                  <S.ProgressTrack>
                    <S.ProgressFill style={{ width: `${ytProgress}%` }} />
                    <S.ProgressThumb style={{ left: `${ytProgress}%` }} />
                  </S.ProgressTrack>
                </S.ProgressBar>
              </S.DesktopControls>
            )}

            <S.MobileVideoContainer>
              {!isVideoLoaded && !useFallback && <S.VideoSkeleton />}

              {!useFallback ? (
                <>
                  <S.HeroMobileVideo
                    ref={videoRef}
                    src="/ks-apresentacao.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                    $loaded={isVideoLoaded}
                  />
                  {isVideoLoaded && (
                    <S.VideoControls>
                      <S.ButtonsRow>
                        <S.ControlButton onClick={togglePlay} aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}>
                          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                        </S.ControlButton>
                        <S.ControlButton onClick={toggleMute} aria-label={isMuted ? 'Ativar som' : 'Silenciar'}>
                          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </S.ControlButton>
                        <S.SpeedButton onClick={cycleSpeed} aria-label="Velocidade">
                          <Gauge size={14} />
                          <span>{playbackSpeed}x</span>
                        </S.SpeedButton>
                      </S.ButtonsRow>
                      <S.ProgressBar
                        ref={progressBarRef}
                        onClick={handleSeek}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                      >
                        <S.ProgressTrack>
                          <S.ProgressFill style={{ width: `${progress}%` }} />
                          <S.ProgressThumb style={{ left: `${progress}%` }} />
                        </S.ProgressTrack>
                      </S.ProgressBar>
                    </S.VideoControls>
                  )}
                </>
              ) : (
                <S.MobileFallbackIframe
                  src="https://www.youtube.com/embed/PRpN4_SPfN0?autoplay=1&loop=1&playlist=PRpN4_SPfN0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&mute=1&vq=small"
                  title="Kamila Siqueira - Apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </S.MobileVideoContainer>
          </S.HeroImagePlaceholder>
          <S.FloatingBadge>
            <S.BadgeIcon>
              <Sparkles size={20} />
            </S.BadgeIcon>
            <S.BadgeText>
              <strong>+230 projetos</strong>
              <span>Entregues</span>
            </S.BadgeText>
          </S.FloatingBadge>
        </S.HeroImageWrapper>
      </S.HeroContainer>

      <S.ScrollIndicator>scroll</S.ScrollIndicator>
    </S.HeroSection>
  );
};
