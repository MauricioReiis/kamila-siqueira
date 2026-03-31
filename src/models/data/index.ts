import type { NavLink, Service, Testimonial, Stat, SocialLink, DashboardCompany } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'services', label: 'Entregas', href: '#services' },
  { id: 'testimonials', label: 'Comentários', href: '#testimonials' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    icon: 'Palette',
    title: 'Identidade Visual',
    description:
      'Crio identidades visuais únicas que refletem a essência da sua marca, garantindo reconhecimento e diferenciação em todos os pontos de contato.',
  },
  {
    id: 2,
    icon: 'Target',
    title: 'Estratégia de Marca',
    description:
      'Desenvolvimento de posicionamento estratégico para fortalecer sua presença no mercado e conectar com o público certo.',
  },
  {
    id: 3,
    icon: 'TrendingUp',
    title: 'Marketing Digital',
    description:
      'Estratégias de marketing digital personalizadas para ampliar seu alcance, engajar sua audiência e gerar resultados consistentes.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Lucilene',
    role: 'Terapeuta',
    company: 'Microempreendedora',
    text: 'Kamila, eu nem sei como te agradecer! 🥹 Minha bio ficou perfeita, profissional direta e do jeito que eu queria. Agora sinto que meu perfil realmente transmite o que eu faço. Você tem um dom, viu? Muito obrigada de coração!',
  },
  {
    id: 2,
    name: 'Numiá',
    role: 'Proprietária',
    company: 'Microempreendedora',
    text: 'Kamila, eu nem sei como te explicar, mas tá funcionando MUITO bem! Eu nem entendia direito esse negócio de tráfego pago, mas agora vejo a diferença... Tem gente chegando no meu WhatsApp todo dia, perguntando sobre meus serviços! Tô muito feliz e impressionada com o seu trabalho! Obrigada mesmo!',
  },
  {
    id: 3,
    name: 'Gabriela',
    role: 'Proprietária',
    company: 'Eu Curto Açai',
    text: 'Kamila do céu!!! Eu tô simplesmente APAIXONADA pelo seu trabalho! Sério, nunca vi meu Instagram desse jeito! O engajamento tá lá em cima, os seguidores novos chegando. Você é incrível, mulher, tô muito feliz!!! Obrigada demaisss! 💜🫶',
  },
  {
    id: 4,
    name: 'Meire',
    role: 'Estilista',
    company: 'A\'Confecção Sob Medida',
    text: 'Que portifolio lindo!! Posso mandar pras minhas amigas tbm?',
  },
  {
    id: 5,
    name: 'Amanda Alves',
    role: 'Empresária',
    company: 'Amanda Alves',
    text: 'Caraca Kamila, é a primeira vez que meus stories bate 2 mil visualizações em uma segunda-feira!',
  },
];

export const stats: Stat[] = [
  { id: 1, value: 230, prefix: '+', suffix: '', label: 'projetos concluídos' },
  { id: 2, value: 100, prefix: '', suffix: '%', label: 'projetos sob medida' },
  { id: 3, value: 4, prefix: '+', suffix: ' anos', label: 'fortalecendo marcas' },
];

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'Instagram', url: 'https://www.instagram.com/kamila_ahdigital/', icon: 'Instagram' },
  { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/kamila-siqueira-41596b30a/', icon: 'Linkedin' },
];

export const heroData = {
  highlight: 'Atrair, Conectar e Vender',
  subtitle: 'Estratégia, execução e escala para marcas que querem crescer',
  cta: 'Enviar proposta',
};

export const aboutData = {
  title: 'Quem é Kamila Siqueira',
  paragraphs: [
    'Estrategista Digital, Mãe e Defensora do Marketing com Intenção.',
    'Acredito que o marketing é, acima de tudo, uma troca entre pessoas. Por isso, meu trabalho foge das fórmulas prontas. Unindo um perfil analítico à criatividade, construo estratégias personalizadas onde a tecnologia é o suporte, mas a inteligência humana é o motor.',
    'Com responsabilidade e foco em processos, transformo confusão em clareza para negócios que buscam evolução contínua e resultados que não dependem apenas de automação, mas de direção.',
  ],
  values: ['Estratégia ', 'Performance', 'Tráfego Pago', 'Funis', 'Conversão'],
};

export const dashboardCompanies: DashboardCompany[] = [
  {
    id: 1,
    segment: 'E-commerce de literatura',
    implementationTime: '90 dias',
    metrics: [
      { key: 'revenue', label: 'Receita mensal', format: 'currency', before: 58000, after: 124000 },
      { key: 'leads', label: 'Leads qualificados', format: 'number', before: 92, after: 268 },
      { key: 'conversion', label: 'Taxa de conversão', format: 'percent', before: 1.8, after: 3.9 },
      { key: 'cac', label: 'CAC', format: 'currency', before: 420, after: 210, betterWhen: 'lower' },
      { key: 'roas', label: 'ROAS', format: 'multiplier', before: 1.7, after: 4.2 },
    ],
  },
  {
    id: 2,
    segment: 'Movéis planejados',
    implementationTime: '120 dias',
    metrics: [
      { key: 'revenue', label: 'Receita mensal', format: 'currency', before: 89000, after: 173000 },
      { key: 'leads', label: 'Leads qualificados', format: 'number', before: 140, after: 355 },
      { key: 'conversion', label: 'Taxa de conversão', format: 'percent', before: 2.4, after: 4.6 },
      { key: 'cac', label: 'CAC', format: 'currency', before: 510, after: 280, betterWhen: 'lower' },
      { key: 'roas', label: 'ROAS', format: 'multiplier', before: 2.1, after: 5.1 },
    ],
  },
  {
    id: 3,
    segment: 'Educacao e infoprodutos',
    implementationTime: '6 meses',
    metrics: [
      { key: 'revenue', label: 'Receita mensal', format: 'currency', before: 46000, after: 118000 },
      { key: 'leads', label: 'Leads qualificados', format: 'number', before: 210, after: 540 },
      { key: 'conversion', label: 'Taxa de conversão', format: 'percent', before: 1.3, after: 2.8 },
      { key: 'cac', label: 'CAC', format: 'currency', before: 240, after: 135, betterWhen: 'lower' },
      { key: 'roas', label: 'ROAS', format: 'multiplier', before: 1.9, after: 4.8 },
    ],
  },
];
