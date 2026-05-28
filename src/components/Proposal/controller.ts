import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import type { ProposalFormData, InterestOption } from '../../lib/types';
import { openWhatsAppProposal } from './message';
import {
  trackEvent,
  trackFormAbandon,
  trackFormProgress,
  trackProposalFormSubmit,
} from '../../lib/analytics';

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
  const hasSubmittedRef = useRef(false);
  const hasAbandonTrackedRef = useRef(false);
  const lastAbandonAtRef = useRef(0);
  const progressTrackedRef = useRef({
    interests: false,
    contact: false,
    goals: false,
    budget: false,
  });
  const lastSnapshotRef = useRef({
    step: 'start',
    fieldsFilled: 0,
    hasInteraction: false,
  });

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
  const nameValue = watch('name') ?? '';
  const companyValue = watch('company') ?? '';
  const emailValue = watch('email') ?? '';
  const socialProfileValue = watch('socialProfile') ?? '';
  const goalsValue = watch('goals') ?? '';
  const referralValue = watch('referral') ?? '';

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
    trackEvent('proposal_form_valid', {
      interests_count: data.interests?.length ?? 0,
      has_company: Boolean(data.company),
      has_referral: Boolean(data.referral),
    });

    setPendingData(data);
    setShowConfirmModal(true);
  });

  const confirmSubmit = () => {
    if (!pendingData) return;
    hasSubmittedRef.current = true;

    trackProposalFormSubmit({
      interestsCount: pendingData.interests?.length ?? 0,
      hasCompany: Boolean(pendingData.company),
      hasSocialProfile: Boolean(pendingData.socialProfile),
      hasReferral: Boolean(pendingData.referral),
      budget: budgetValue,
    });

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

  useEffect(() => {
    const isModalOpen = showConfirmModal || showThankYou;
    if (!isModalOpen) return;

    const scrollY = window.scrollY;
    const originalBodyStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = originalBodyStyle.overflow;
      document.body.style.position = originalBodyStyle.position;
      document.body.style.top = originalBodyStyle.top;
      document.body.style.width = originalBodyStyle.width;
      window.scrollTo(0, scrollY);
    };
  }, [showConfirmModal, showThankYou]);

  const trackAbandonIfNeeded = () => {
    const snapshot = lastSnapshotRef.current;
    if (!snapshot.hasInteraction || hasSubmittedRef.current) return;

    const now = Date.now();
    if (hasAbandonTrackedRef.current || now - lastAbandonAtRef.current < 1500) return;

    hasAbandonTrackedRef.current = true;
    lastAbandonAtRef.current = now;
    trackFormAbandon(snapshot.step, snapshot.fieldsFilled);
  };

  useEffect(() => {
    const contactComplete = Boolean(nameValue && phoneValue && emailValue);
    const goalsComplete = Boolean(goalsValue.trim());
    const interestsComplete = selectedInterests.length > 0;
    const budgetTouched = budgetValue !== 25000;

    if (interestsComplete && !progressTrackedRef.current.interests) {
      progressTrackedRef.current.interests = true;
      trackFormProgress('interests', 1);
    }

    if (contactComplete && !progressTrackedRef.current.contact) {
      progressTrackedRef.current.contact = true;
      trackFormProgress('contact', 3);
    }

    if (goalsComplete && !progressTrackedRef.current.goals) {
      progressTrackedRef.current.goals = true;
      trackFormProgress('goals', 4);
    }

    if (budgetTouched && !progressTrackedRef.current.budget) {
      progressTrackedRef.current.budget = true;
      trackFormProgress('budget', 5);
    }

    const optionalFilled = [companyValue, socialProfileValue, referralValue].filter((v) => Boolean(v?.trim())).length;
    const requiredFilled = [Boolean(nameValue), Boolean(phoneValue), Boolean(emailValue), interestsComplete, goalsComplete]
      .filter(Boolean)
      .length;
    const fieldsFilled = requiredFilled + optionalFilled;

    const hasInteraction = fieldsFilled > 0 || budgetTouched;
    const step = showConfirmModal
      ? 'confirm_modal'
      : goalsComplete
        ? 'goals'
        : contactComplete
          ? 'contact'
          : interestsComplete
            ? 'interests'
            : 'start';

    lastSnapshotRef.current = { step, fieldsFilled, hasInteraction };
  }, [
    budgetValue,
    companyValue,
    emailValue,
    goalsValue,
    nameValue,
    phoneValue,
    referralValue,
    selectedInterests.length,
    showConfirmModal,
    socialProfileValue,
  ]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      trackAbandonIfNeeded();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      trackAbandonIfNeeded();
    };
  }, []);

  const formatCurrency = (value: number) =>
    value >= 500000
      ? 'R$ 500.000+'
      : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  const interestOptions: InterestOption[] = [
    { label: 'Marketing Completo 360', description: 'Integração estratégica de posicionamento, conteúdo, tráfego pago e análise de dados para escalar vendas com consistência.' },
    { label: 'Landing Pages & Sites de Conversão', description: 'Desenvolvimento de estruturas que convertem interesse em ação e ação em receita através de copywriting e design estratégico.' },
    { label: 'Consultoria Estratégica', description: 'Diagnóstico completo do marketing atual, reposicionamento e plano de ação focado em resultado mensurável.' },
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
