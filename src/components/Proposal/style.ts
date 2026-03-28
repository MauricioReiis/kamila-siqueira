import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProposalPage = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 2rem 4rem;
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
  background: ${({ theme }) => theme.colors.backgroundCard};
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

  input {
    display: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
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

export const FormInput = styled.input`
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.background};
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
  background: ${({ theme }) => theme.colors.background};
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
  background: ${({ theme }) => theme.colors.background};
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
