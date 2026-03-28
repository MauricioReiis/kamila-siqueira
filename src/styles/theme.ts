export const darkTheme = {
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
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
} as const;

export const lightTheme = {
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
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
} as const;

// Keep backward-compat alias
export const theme = darkTheme;

export type ThemeType = typeof darkTheme;
