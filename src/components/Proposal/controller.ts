import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import type { ProposalFormData, InterestOption } from '../../lib/types';
import { openWhatsAppProposal } from './message';

const formatPhone = (raw: string): string => {
  const d = raw.replace(/\D/g, '').slice(0, 11);
  if (!d) return '';
  if (d.length <= 2) return `(${d}`;
  const ddd = `(${d.slice(0, 2)})`;
  const rest = d.slice(2);
  if (rest.length <= 1) return `${ddd} ${rest}`;
  if (rest.length <= 5) return `${ddd} ${rest[0]} ${rest.slice(1)}`;
  return `${ddd} ${rest[0]} ${rest.slice(1, 5)}-${rest.slice(5)}`;
};

export const useProposal = () => {
  const [budgetValue, setBudgetValue] = useState(25000);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [pendingData, setPendingData] = useState<ProposalFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<ProposalFormData>({
    mode: 'onChange',
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

  const phoneValue = watch('phone') ?? '';

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('phone', formatPhone(e.target.value), { shouldValidate: true });
  };

  register('phone', {
    required: 'Celular é obrigatório',
    validate: (value) => {
      const digits = (value ?? '').replace(/\D/g, '');
      return digits.length === 11 || 'Número inválido. Ex: (32) 9 9999-9999';
    },
  });

  // Register interests field with validation for at least 1 selection
  register('interests', {
    validate: (value) => {
      return (value && value.length > 0) || 'Selecione pelo menos 1 opção';
    },
  });

  const onSubmit = handleSubmit((data: ProposalFormData) => {
    setPendingData(data);
    setShowConfirmModal(true);
  });

  const confirmSubmit = () => {
    if (!pendingData) return;
    openWhatsAppProposal(pendingData, budgetValue);
    setShowConfirmModal(false);
    setPendingData(null);
    setShowThankYou(true);

    reset({
      name: '',
      company: '',
      phone: '',
      email: '',
      socialProfile: '',
      interests: [],
      goals: '',
      referral: '',
    });
    setBudgetValue(25000);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  const cancelSubmit = () => {
    setShowConfirmModal(false);
    setPendingData(null);
  };

  const formatCurrency = (value: number) =>
    value >= 500000
      ? 'R$ 500.000+'
      : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  const interestOptions: InterestOption[] = [
    { label: 'Branding', description: 'Desenvolvimento completo da identidade visual, logos, paleta de cores, tipografia e guidelines de marca para uma presença consistente.' },
    { label: 'Consultoria de Marca', description: 'Análise estratégica da sua marca com recomendações personalizadas para posicionamento e crescimento.' },
    { label: 'Contrução e Reposicionamento de Marca', description: 'Criação ou reestruturação completa da identidade e posicionamento da sua marca no mercado.' },
    { label: 'CRM & Automação', description: 'Implementação de ferramentas de CRM e fluxos automatizados para nutrir leads e fidelizar clientes.' },
    { label: 'Dados & Performace', description: 'Monitoramento de métricas, dashboards e análise de dados para decisões baseadas em performance.' },
    { label: 'Configuração de Pixel de Monitoramento', description: 'Implementação de pixels (Facebook, Google, LinkedIn) e tracking para medir comportamento do usuário, conversões e otimizar campanhas.' },
    { label: 'Criação de Landing Page', description: 'Desenvolvimento de páginas otimizadas para conversão com design responsivo, copy persuasivo e CTA estratégico.' },
    { label: 'Criação de Website para E-commerce', description: 'Desenvolvimento completo de lojas online com integração de pagamento, gerenciamento de produtos, carrinho inteligente e otimização para vendas.' },
    { label: 'Definição de Público-Alvo e Segmentação' },
    { label: 'Design de Conteúdo' },
    { label: 'Diagnóstico / Auditoria de Presença Digital', description: 'Análise detalhada dos seus canais digitais com relatório de pontos fortes, fracos e oportunidades.' },
    { label: 'Direção Criativa de Redes Sociais', description: 'Planejamento visual e conceitual do conteúdo das suas redes, alinhado à identidade da marca.' },
    { label: 'Estratégia de Conteúdo', description: 'Planejamento editorial com calendário, pilares de conteúdo e estratégias de engajamento.' },
    { label: 'Gestão Completa de Marketing', description: 'Gestão integral de todas as frentes de marketing: estratégia, execução, análise e otimização.' },
    { label: 'Mentoria de Marketing', description: 'Sessões individuais para orientar suas estratégias de marketing e acelerar resultados.' },
    { label: 'Otimização de Perfils Sociais' },
    { label: 'Social Midia & Conteúdo' },
    { label: 'Trafégo Pago', description: 'Gestão de campanhas pagas em Google Ads, Meta Ads e outras plataformas para gerar leads qualificados.' },
    { label: 'Outros...' }
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
    register,
    onSubmit,
    errors,
    isFormValid: isValid,
    interestOptions,
    referralOptions,
    selectedInterests,
    toggleInterest,
    phoneValue,
    handlePhoneChange,
    showConfirmModal,
    pendingData,
    confirmSubmit,
    cancelSubmit,
    showThankYou,
    closeThankYou,
  };
};
