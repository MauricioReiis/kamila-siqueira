import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const ContactContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: center;
    align-items: center;
  }
`;

export const SectionLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContactDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 28.125rem;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color ${({ theme }) => theme.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  min-height: 2.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transition};
  box-shadow: 0 0 0 0.0625rem ${({ theme }) => theme.colors.borderLight} inset;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-0.1875rem);
    background: rgba(196, 139, 159, 0.1);
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
`;

export const FormInput = styled.input`
  padding: 0.875rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.1875rem rgba(196, 139, 159, 0.1);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 0.875rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 8.75rem;
  resize: vertical;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.1875rem rgba(196, 139, 159, 0.1);
  }
`;

export const FormError = styled.span`
  font-size: 0.8rem;
  color: #e74c3c;
`;

export const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background: rgba(39, 174, 96, 0.1);
  border: 0.0625rem solid rgba(39, 174, 96, 0.3);
  border-radius: 0.5rem;
  color: #27ae60;
  text-align: center;
  font-weight: 500;
`;
