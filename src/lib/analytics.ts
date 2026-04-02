type EventParams = Record<string, string | number | boolean | undefined>;
type ButtonClickPayload = {
  label: string;
  location?: string;
  text?: string;
  href?: string;
};

type ContactClickPayload = {
  channel: 'instagram' | 'whatsapp' | 'email' | 'linkedin' | 'other';
  label: string;
  href: string;
  location?: string;
};

type VideoInteractionPayload = {
  provider: 'youtube' | 'html5';
  action: 'play' | 'pause' | 'mute' | 'unmute' | 'seek' | 'speed_change';
  location?: string;
  extra?: string | number;
};

type GtagFn = (...args: unknown[]) => void;
type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
    fbq?: FbqFn;
    clarity?: (...args: unknown[]) => void;
  }
}

let initialized = false;

const loadScript = (id: string, src: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const emitFbq = (...args: unknown[]) => {
  const fbq = window.fbq;
  if (typeof fbq === 'function') {
    fbq(...args);
  }
};

const setupGA = (measurementId: string) => {
  loadScript('ga4-script', `https://www.googletagmanager.com/gtag/js?id=${measurementId}`);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });
};

const setupMetaPixel = (pixelId: string) => {
  if (window.fbq) {
    emitFbq('init', pixelId);
    return;
  }

  const fbqProxy = ((...args: unknown[]) => {
    fbqProxy.queue.push(args);
  }) as FbqFn & {
    push: FbqFn;
    queue: unknown[][];
    loaded: boolean;
    version: string;
  };

  fbqProxy.queue = [];
  fbqProxy.loaded = true;
  fbqProxy.version = '2.0';
  fbqProxy.push = fbqProxy;

  window.fbq = fbqProxy;
  loadScript('meta-pixel-script', 'https://connect.facebook.net/en_US/fbevents.js');
  emitFbq('init', pixelId);
};

const setupClarity = (projectId: string) => {
  if (document.getElementById('clarity-script')) return;

  const script = document.createElement('script');
  script.id = 'clarity-script';
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${projectId}`;
  document.head.appendChild(script);
};

export const initAnalytics = () => {
  if (initialized) return;
  initialized = true;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (gaId) setupGA(gaId);
  if (pixelId) setupMetaPixel(pixelId);
  if (clarityId) setupClarity(clarityId);
};

export const trackPageView = (path: string) => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (gaId && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  if (window.fbq) {
    emitFbq('track', 'PageView');
  }
};

export const trackEvent = (eventName: string, params: EventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackButtonClick = ({ label, location, text, href }: ButtonClickPayload) => {
  trackEvent('cta_click', {
    button_label: label,
    button_location: location,
    button_text: text,
    destination: href,
    page_path: window.location.pathname,
  });
};

export const trackProposalFormSubmit = (payload: {
  interestsCount: number;
  hasCompany: boolean;
  hasSocialProfile: boolean;
  hasReferral: boolean;
  budget: number;
}) => {
  trackEvent('generate_lead', {
    channel: 'whatsapp',
    interests_count: payload.interestsCount,
    has_company: payload.hasCompany,
    has_social_profile: payload.hasSocialProfile,
    has_referral: payload.hasReferral,
    budget: payload.budget,
  });

  if (window.fbq) {
    emitFbq('track', 'Lead', {
      content_name: 'proposal_form',
      channel: 'whatsapp',
    });
  }
};

export const trackContactClick = ({ channel, label, href, location }: ContactClickPayload) => {
  trackEvent('contact_click', {
    contact_channel: channel,
    contact_label: label,
    contact_location: location,
    destination: href,
    page_path: window.location.pathname,
  });
};

export const trackVideoInteraction = ({ provider, action, location, extra }: VideoInteractionPayload) => {
  trackEvent('video_interaction', {
    video_provider: provider,
    video_action: action,
    video_location: location,
    video_extra: extra,
    page_path: window.location.pathname,
  });
};

export const trackFormProgress = (step: string, fieldsFilled: number) => {
  trackEvent('proposal_form_progress', {
    form_step: step,
    fields_filled: fieldsFilled,
    page_path: window.location.pathname,
  });
};

export const trackFormAbandon = (step: string, fieldsFilled: number) => {
  trackEvent('proposal_form_abandon', {
    abandoned_step: step,
    fields_filled: fieldsFilled,
    page_path: window.location.pathname,
  });
};
