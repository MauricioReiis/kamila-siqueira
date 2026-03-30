import { Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
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
          Vamos estruturar o proximo passo do seu crescimento?
        </S.Title>

        <S.Description initial={initial} animate={animate} transition={transition(0.2)}>
          Unimos estratégia, execução e análise para atrair, conectar e vender com
          consistência. Envie sua proposta e retorno com os próximos passos em até 1 dia útil.
        </S.Description>

        <S.InfoRow initial={initial} animate={animate} transition={transition(0.3)}>
          <S.InfoItem>
            <Mail size={18} />
            <a href="mailto:contato@kamilasiqueira.com">
              contato@kamilasiqueira.com.br
            </a>
          </S.InfoItem>
          <S.InfoItem>
            <MessageCircle size={18} />
            <a href="https://wa.me/5532998123552" target="_blank" rel="noopener noreferrer">(32) 9 9812-3552</a>
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
