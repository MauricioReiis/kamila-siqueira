import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProposalPage = styled.div`
  min-height: 100vh;
  background: transparent;
  padding: 6rem 2rem 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 5rem 1.25rem 2.5rem;
  }
`;

export const Container = styled.div`
  max-width: 43.75rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;

  span {
    background: ${({ theme }) => theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 0.5rem;
  line-height: 1.6;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(0.75rem);
  -webkit-backdrop-filter: blur(0.75rem);
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2.5rem;
`;

export const SectionLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0938rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.75rem;
`;

export const InterestGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const InterestChip = styled.label<{ $selected: boolean }>`
  padding: 0.45rem 1rem;
  border-radius: 62.4375rem;
  border: 0.0625rem solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.primary : theme.colors.border};
  background: ${({ $selected }) =>
    $selected ? 'rgba(196, 139, 159, 0.15)' : 'transparent'};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.textMuted};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: relative;

  input {
    display: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InfoIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;

  svg {
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  &:hover svg {
    opacity: 1;
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: 18rem;
  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.78rem;
  font-weight: 400;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 10;
  pointer-events: none;
  white-space: normal;
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const FormLabel = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const RequiredAsterisk = styled.span`
  color: #e74c3c;
  margin-left: 0.2rem;
`;

export const FormInput = styled.input`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.1875rem rgba(196, 139, 159, 0.12);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  min-height: 7.5rem;
  resize: vertical;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.1875rem rgba(196, 139, 159, 0.12);
  }
`;

export const FormSelect = styled.select`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23A0A0A0' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  transition: border-color ${({ theme }) => theme.transition};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.1875rem rgba(196, 139, 159, 0.12);
  }

  option {
    background: ${({ theme }) => theme.colors.backgroundCard};
  }
`;

export const FormError = styled.span`
  font-size: 0.78rem;
  color: #e74c3c;
`;

export const BudgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BudgetDisplay = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  span {
    background: ${({ theme }) => theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.25rem;
  border-radius: 62.4375rem;
  background: ${({ theme }) => theme.colors.border};
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    box-shadow: 0 0 0 0.1875rem rgba(196, 139, 159, 0.25);
    transition: box-shadow ${({ theme }) => theme.transition};
  }

  &::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 0.375rem rgba(196, 139, 159, 0.25);
  }

  &::-moz-range-thumb {
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    border: none;
  }
`;

export const RangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textDark};
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

export const SubmitRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  min-width: 8rem;
  min-height: 2.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 0.75rem;
  border: 0.0625rem solid transparent;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover:not(:disabled) {
    transform: translateY(-0.0625rem);
    box-shadow: 0 0.5rem 1.25rem rgba(196, 139, 159, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    background: ${({ theme }) => theme.colors.borderLight};
    color: ${({ theme }) => theme.colors.textDark};
    box-shadow: none;
    transform: none;
  }
`;

/* ── Confirmation Modal ── */

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(0.5rem);
  padding: 1.5rem;
`;

export const ModalCard = styled(motion.div)`
  width: 100%;
  max-width: 32rem;
  max-height: 85vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${({ theme }) =>
    theme.colors.background === '#0A0A0A'
      ? 'rgba(18, 18, 18, 0.82)'
      : 'rgba(255, 255, 255, 0.82)'};
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 62.4375rem;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.border} transparent;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const ModalSectionTitle = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ModalField = styled.div`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: 500;
    margin-right: 0.35rem;
  }
`;

export const ModalChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

export const ModalChip = styled.span`
  font-size: 0.78rem;
  padding: 0.25rem 0.65rem;
  border-radius: 62.4375rem;
  background: rgba(196, 139, 159, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  border: 0.0625rem solid rgba(196, 139, 159, 0.25);
`;

export const ModalDivider = styled.hr`
  border: none;
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.border};
  margin: 0;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
`;

export const ModalButtonSecondary = styled.button`
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalButtonPrimary = styled.button`
  padding: 0.6rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-0.0625rem);
    box-shadow: 0 0.5rem 1.25rem rgba(196, 139, 159, 0.3);
  }
`;

export const ThankYouContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export const ThankYouIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ThankYouTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThankYouText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 24rem;
`;
