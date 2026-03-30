import { Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import * as S from './style';

export const ContactCTAView: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const animate = inView ? { opacity: 1, y: 0 } : {};
  const initial = { opacity: 0, y: 30 };
  const transition = (delay = 0) => ({ duration: 0.6, delay });

  return (
    <S.Section id="contact" ref={ref}>
      <S.Container>
        <S.SectionLabel initial={initial} animate={animate} transition={transition()}>
          Contato
        </S.SectionLabel>

        <S.Title initial={initial} animate={animate} transition={transition(0.1)}>
          Pronta para transformar sua marca?
        </S.Title>

        <S.Description initial={initial} animate={animate} transition={transition(0.2)}>
          Vamos conversar sobre como posso ajudar o seu negócio a se destacar e conquistar
          resultados reais. Preencha uma proposta e retorno em até 1 dia útil.
        </S.Description>

        <S.InfoRow initial={initial} animate={animate} transition={transition(0.3)}>
          <S.InfoItem>
            <Mail size={18} />
            <a href="mailto:contato@kamilasiqueira.com">
              contato@kamilasiqueira.com.br
            </a>
          </S.InfoItem>
          <S.InfoItem>
            <Phone size={18} />
            <a href="tel:+553298123552">(32) 9 9812-3552</a>
          </S.InfoItem>
          <S.InfoItem>
            <MapPin size={18} />
            <span>Juiz de Fora, MG - Brasil</span>
          </S.InfoItem>
        </S.InfoRow>

        <S.CTAGroup initial={initial} animate={animate} transition={transition(0.4)}>
          <S.CTAButton href="/proposta">
            Enviar proposta <ArrowRight size={18} />
          </S.CTAButton>
        </S.CTAGroup>
      </S.Container>
    </S.Section>
  );
};
