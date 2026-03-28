import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ProposalFormData } from '../../models/types';

export const useProposal = () => {
  const [budgetValue, setBudgetValue] = useState(25000);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProposalFormData>({
    defaultValues: { interests: [] },
  });

  const selectedInterests = watch('interests') ?? [];

  const toggleInterest = (option: string) => {
    const current = watch('interests') ?? [];
    const updated = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];
    setValue('interests', updated, { shouldValidate: true });
  };

  const onSubmit = handleSubmit((data: ProposalFormData) => {
    console.log('Proposal data:', { ...data, budget: budgetValue });
    setIsSubmitted(true);
    reset({ interests: [] });
    setBudgetValue(25000);
    setTimeout(() => setIsSubmitted(false), 5000);
  });

  const formatCurrency = (value: number) =>
    value >= 500000
      ? 'R$ 500.000+'
      : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  const interestOptions = [
    'Identidade Visual',
    'Estratégia de Marca',
    'Marketing Digital',
    'Gestão de Redes Sociais',
    'Design de Conteúdo',
    'Consultoria de Marca',
  ];

  const referralOptions = [
    'Indicação de amigo/colega',
    'Instagram',
    'LinkedIn',
    'Google',
    'Evento ou palestra',
    'Outro',
  ];

  return {
    budgetValue,
    setBudgetValue,
    formatCurrency,
    isSubmitted,
    register,
    onSubmit,
    errors,
    interestOptions,
    referralOptions,
    selectedInterests,
    toggleInterest,
  };
};
