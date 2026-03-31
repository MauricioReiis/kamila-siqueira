import { useTestimonials } from './controller';
import * as S from './style';

export const TestimonialsView: React.FC = () => {
  const {
    ref,
    inView,
    testimonials,
    carouselRef,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isPaused,
    getInitials,
  } = useTestimonials();

  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <S.TestimonialsSection id="testimonials">
      <S.TestimonialsContainer>
        <S.TestimonialsHeader>
          <S.SectionTitle>Comentários</S.SectionTitle>
        </S.TestimonialsHeader>

        <S.TestimonialsCarousel
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          $isPaused={isPaused}
        >
          <S.TestimonialsTrack ref={ref}>
            {loopedTestimonials.map((testimonial, index) => (
              <S.TestimonialCard
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.6) }}
              >
                <S.QuoteIcon>&ldquo;</S.QuoteIcon>
                <S.TestimonialText>{testimonial.text}</S.TestimonialText>
                <S.TestimonialAuthor>
                  <S.AuthorAvatar>
                    {getInitials(testimonial.name)}
                  </S.AuthorAvatar>
                  <S.AuthorInfo>
                    <strong>{testimonial.name}</strong>
                    <span>
                      {testimonial.role} — {testimonial.company}
                    </span>
                  </S.AuthorInfo>
                </S.TestimonialAuthor>
              </S.TestimonialCard>
            ))}
          </S.TestimonialsTrack>
        </S.TestimonialsCarousel>
      </S.TestimonialsContainer>
    </S.TestimonialsSection>
  );
};
