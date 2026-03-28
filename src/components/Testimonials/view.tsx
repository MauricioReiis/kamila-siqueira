import { useTestimonials } from './controller';
import * as S from './style';

export const TestimonialsView: React.FC = () => {
  const { ref, inView, testimonials, getInitials } = useTestimonials();

  return (
    <S.TestimonialsSection id="testimonials">
      <S.TestimonialsContainer>
        <S.TestimonialsHeader>
          <S.SectionLabel>Depoimentos</S.SectionLabel>
          <S.SectionTitle>O que estão dizendo sobre mim</S.SectionTitle>
        </S.TestimonialsHeader>

        <S.TestimonialsGrid ref={ref}>
          {testimonials.map((testimonial, index) => (
            <S.TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
        </S.TestimonialsGrid>
      </S.TestimonialsContainer>
    </S.TestimonialsSection>
  );
};
