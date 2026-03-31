export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface Stat {
  id: number;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ProposalFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  socialProfile?: string;
  interests: string[];
  goals: string;
  referral?: string;
}

export interface InterestOption {
  label: string;
  description?: string;
}

export type DashboardMetricFormat = 'number' | 'currency' | 'percent' | 'multiplier';

export interface DashboardMetric {
  key: string;
  label: string;
  format: DashboardMetricFormat;
  before: number;
  after: number;
  betterWhen?: 'higher' | 'lower';
}

export interface DashboardCompany {
  id: number;
  segment: string;
  implementationTime: string;
  metrics: DashboardMetric[];
}
