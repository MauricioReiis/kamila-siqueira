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
    name: 'Ana Clara Mendes',
    role: 'CEO',
    company: 'Studio Belle',
    text: 'A Kamila transformou completamente a identidade da minha marca. Seu olhar estratégico e criativo fez toda a diferença. Profissional excepcional que entrega muito além do esperado!',
  },
  {
    id: 2,
    name: 'Rafael Costa',
    role: 'Fundador',
    company: 'Costa & Associados',
    text: 'Trabalhar com a Kamila foi uma experiência incrível. Ela entende profundamente o que a marca precisa e traduz isso em resultados visuais impressionantes. Recomendo de olhos fechados!',
  },
  {
    id: 3,
    name: 'Beatriz Lima',
    role: 'Diretora Criativa',
    company: 'Agência Florescer',
    text: 'A Kamila tem um dom único de transformar ideias em realidade. Sua dedicação, profissionalismo e talento são incomparáveis. Minha marca nunca esteve tão forte!',
  },
];

export const stats: Stat[] = [
  { id: 1, value: 230, prefix: '+', suffix: '', label: 'projetos concluídos' },
  { id: 2, value: 100, prefix: '', suffix: '%', label: 'projetos sob medida' },
  { id: 3, value: 4, prefix: '+', suffix: ' anos', label: 'fortalecendo marcas' },
];

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'Instagram', url: 'https://instagram.com/kamilasiqueira', icon: 'Instagram' },
  { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/in/kamilasiqueira', icon: 'Linkedin' },
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
  values: ['Estratégia ', 'Performance', 'Tráfego Pago', 'Funis', 'Conteúdo que converte'],
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
    implementationTime: '6 meses',
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
    implementationTime: '120 dias',
    metrics: [
      { key: 'revenue', label: 'Receita mensal', format: 'currency', before: 46000, after: 118000 },
      { key: 'leads', label: 'Leads qualificados', format: 'number', before: 210, after: 540 },
      { key: 'conversion', label: 'Taxa de conversão', format: 'percent', before: 1.3, after: 2.8 },
      { key: 'cac', label: 'CAC', format: 'currency', before: 240, after: 135, betterWhen: 'lower' },
      { key: 'roas', label: 'ROAS', format: 'multiplier', before: 1.9, after: 4.8 },
    ],
  },
];
