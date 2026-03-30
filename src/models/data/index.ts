import type { NavLink, Service, Testimonial, Stat, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'services', label: 'Serviços', href: '#services' },
  { id: 'testimonials', label: 'Depoimentos', href: '#testimonials' },
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
  { id: 1, value: 500, prefix: '+', suffix: '', label: 'projetos concluídos' },
  { id: 2, value: 50, prefix: '+', suffix: '', label: 'marcas fortalecidas' },
  { id: 3, value: 100, prefix: '', suffix: '%', label: 'projetos sob medida' },
  { id: 4, value: 8, prefix: '+', suffix: ' anos', label: 'fortalecendo marcas' },
];

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'Instagram', url: 'https://instagram.com/kamilasiqueira', icon: 'Instagram' },
  { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/in/kamilasiqueira', icon: 'Linkedin' },
  { id: 3, name: 'WhatsApp', url: 'https://wa.me/5500000000000', icon: 'MessageCircle' },
];

export const heroData = {
  highlight: 'Atrair, Conectar e Vender',
  subtitle: 'Estratégia, execução e escala para marcas que querem crescer',
  cta: 'Solicitar proposta',
};

export const aboutData = {
  title: 'Quem é Kamila Siqueira',
  paragraphs: [
    'Sou estrategista de marca e designer com mais de 8 anos de experiência transformando negócios através do poder do branding.',
    'Acredito que uma marca forte é a base de qualquer negócio de sucesso. Meu trabalho é criar identidades visuais que não apenas impressionam, mas que conectam, comunicam e convertem.',
    'Cada projeto é tratado como único, com dedicação e atenção aos detalhes que fazem a diferença entre uma marca comum e uma marca memorável.',
  ],
  values: ['Criatividade', 'Estratégia', 'Dedicação', 'Excelência', 'Inovação'],
};
