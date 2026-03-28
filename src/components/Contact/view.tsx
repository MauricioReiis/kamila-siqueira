import { Mail, MapPin, Phone, Camera, Briefcase, MessageCircle } from 'lucide-react';
import { Button } from '../Button';
import { useContact } from './controller';
import * as S from './style';

const socialIconMap: Record<string, React.FC<{ size?: number }>> = {
  Instagram: Camera,
  Linkedin: Briefcase,
  MessageCircle,
};

export const ContactView: React.FC = () => {
  const { ref, inView, register, onSubmit, errors, isSubmitted, socialLinks } =
    useContact();

  return (
    <S.ContactSection id="contact" ref={ref}>
      <S.ContactContainer>
        <S.ContactInfo
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <S.SectionLabel>Contato</S.SectionLabel>
          <S.SectionTitle>Entre em contato</S.SectionTitle>
          <S.ContactDescription>
            Pronta para transformar sua marca? Vamos conversar sobre como posso
            ajudar o seu negócio a se destacar e conquistar resultados reais.
          </S.ContactDescription>

          <S.ContactDetails>
            <S.ContactItem>
              <Mail size={20} />
              <a href="mailto:contato@kamilasiqueira.com.br">
                contato@kamilasiqueira.com.br
              </a>
            </S.ContactItem>
            <S.ContactItem>
              <Phone size={20} />
              <a href="tel:+5500000000000">(00) 00000-0000</a>
            </S.ContactItem>
            <S.ContactItem>
              <MapPin size={20} />
              <span>São Paulo, SP — Brasil</span>
            </S.ContactItem>
          </S.ContactDetails>

          <S.SocialLinks>
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <S.SocialLink
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={20} />}
                </S.SocialLink>
              );
            })}
          </S.SocialLinks>
        </S.ContactInfo>

        <S.ContactForm
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <S.FormGroup>
            <S.FormLabel htmlFor="name">Nome completo</S.FormLabel>
            <S.FormInput
              id="name"
              placeholder="Seu nome"
              {...register('name', { required: 'Nome é obrigatório' })}
            />
            {errors.name && <S.FormError>{errors.name.message}</S.FormError>}
          </S.FormGroup>

          <S.FormGroup>
            <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
            <S.FormInput
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register('email', {
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido',
                },
              })}
            />
            {errors.email && <S.FormError>{errors.email.message}</S.FormError>}
          </S.FormGroup>

          <S.FormGroup>
            <S.FormLabel htmlFor="phone">WhatsApp</S.FormLabel>
            <S.FormInput
              id="phone"
              placeholder="(00) 00000-0000"
              {...register('phone')}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.FormLabel htmlFor="message">Mensagem</S.FormLabel>
            <S.FormTextarea
              id="message"
              placeholder="Descreva aqui o que você precisa..."
              {...register('message', {
                required: 'Mensagem é obrigatória',
                minLength: { value: 10, message: 'Mínimo de 10 caracteres' },
              })}
            />
            {errors.message && <S.FormError>{errors.message.message}</S.FormError>}
          </S.FormGroup>

          {isSubmitted && (
            <S.SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </S.SuccessMessage>
          )}

          <Button type="submit" size="lg" fullWidth>
            Enviar mensagem
          </Button>
        </S.ContactForm>
      </S.ContactContainer>
    </S.ContactSection>
  );
};
