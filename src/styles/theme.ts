
export interface ThemeType {
  colors: {
    background: string;
    backgroundAlt: string;
    backgroundCard: string;
    backgroundNav: string;
    backgroundNavMenu: string;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    text: string;
    textMuted: string;
    textDark: string;
    border: string;
    borderLight: string;
    overlay: string;
    gradient: string;
    gradientText: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  maxWidth: string;
  transition: string;
  borderRadius: string;
}

export const darkTheme: ThemeType = {
  colors: {
    background: '#0A0A0A',
    backgroundAlt: '#111111',
    backgroundCard: '#161616',
    backgroundNav: 'rgba(10, 10, 10, 0.95)',
    backgroundNavMenu: 'rgba(10, 10, 10, 0.98)',
    primary: '#C48B9F',
    primaryLight: '#E8B4B8',
    primaryDark: '#A06B7F',
    secondary: '#D4A574',
    text: '#FFFFFF',
    textMuted: '#A0A0A0',
    textDark: '#6B6B6B',
    border: '#222222',
    borderLight: '#2A2A2A',
    overlay: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #C48B9F 0%, #D4A574 100%)',
    gradientText: 'linear-gradient(135deg, #C48B9F 0%, #D4A574 100%)',
  },
  fonts: {
    heading: "'Sora', 'Segoe UI', sans-serif",
    body: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '30rem',
    tablet: '48rem',
    desktop: '64rem',
    wide: '75rem',
  },
  maxWidth: '75rem',
  transition: '0.3s ease',
  borderRadius: '0.75rem',
};

export const lightTheme: ThemeType = {
  colors: {
    background: '#FAFAFA',
    backgroundAlt: '#F0F0F0',
    backgroundCard: '#FFFFFF',
    backgroundNav: 'rgba(250, 250, 250, 0.95)',
    backgroundNavMenu: 'rgba(250, 250, 250, 0.98)',
    primary: '#C48B9F',
    primaryLight: '#E8B4B8',
    primaryDark: '#A06B7F',
    secondary: '#D4A574',
    text: '#0A0A0A',
    textMuted: '#555555',
    textDark: '#999999',
    border: '#E0E0E0',
    borderLight: '#EBEBEB',
    overlay: 'rgba(0, 0, 0, 0.4)',
    gradient: 'linear-gradient(135deg, #C48B9F 0%, #D4A574 100%)',
    gradientText: 'linear-gradient(135deg, #C48B9F 0%, #D4A574 100%)',
  },
  fonts: {
    heading: "'Sora', 'Segoe UI', sans-serif",
    body: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '30rem',
    tablet: '48rem',
    desktop: '64rem',
    wide: '75rem',
  },
  maxWidth: '75rem',
  transition: '0.3s ease',
  borderRadius: '0.75rem',
};

// Keep backward-compat alias
export const theme = darkTheme;
