import type { ProposalFormData } from '../../lib/types';

const WHATSAPP_NUMBER = '5532984454129';

const formatCurrency = (value: number) =>
  value >= 500000
    ? 'R$ 500.000+'
    : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export const buildProposalMessage = (data: ProposalFormData, budget: number): string => {
  const interests = (data.interests ?? []).map((i) => `> ${i}`).join('\n');

  let n = 3;

  const parts = [
    `──────────────────────`,
    `*NOVO CLIENTE*`,
    `──────────────────────`,
    ``,
    `*1 | DADOS DO CLIENTE*`,
    ``,
    `*Nome:* ${data.name}`,
    data.company ? `*Empresa:* ${data.company}` : null,
    `*Celular:* ${data.phone}`,
    `*E-mail:* ${data.email}`,
    data.socialProfile ? `*Redes sociais:* ${data.socialProfile}` : null,
    ``,
    `──────────────────────`,
    ``,
    `*2 | SERVICOS DE INTERESSE*`,
    ``,
    interests,
    ``,
    `──────────────────────`,
    data.goals
      ? [
          ``,
          `*${n++} | OBJETIVOS DO PROJETO*`,
          ``,
          `_${data.goals}_`,
          ``,
          `──────────────────────`,
        ].join('\n')
      : null,
    ``,
    `*${n++} | ORCAMENTO ESTIMADO*`,
    ``,
    `*${formatCurrency(budget)}*`,
    ``,
    `──────────────────────`,
    data.referral
      ? [
          ``,
          `*${n++} | COMO NOS CONHECEU*`,
          ``,
          data.referral,
          ``,
          `──────────────────────`,
        ].join('\n')
      : null,
    ``,
    `_Proposta enviada via site oficial._`,
    `_Retorno em até 1 dia útil._`,
  ]
    .filter(Boolean)
    .join('\n');

  return parts;
};

export { formatCurrency };

export const openWhatsAppProposal = (data: ProposalFormData, budget: number) => {
  const message = buildProposalMessage(data, budget);
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  );
};
