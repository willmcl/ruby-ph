export const theme = {
  colours: {
    black: '#000000',
    white: 'white',
    // Links
    link: '#0071fc',
    visited: '#0071fc',
    // Accessibility and forms
    focus: '#4fcd90',
    error: '#d0021b',

    rubyRed: '#f64a46',
    rubyBlue: '#93d0d3',
    rubyYellow: '#ffcb00',

    highlightPink: '#ff55aa',
  },
  breakpoints: {
    sm: 'min-width: 576px',
    md: 'min-width: 768px',
    lg: 'min-width: 992px',
    xl: 'min-width: 1200px',
  },
  typography: {
    base: 1.6,
    scale: {
      xs: 1.067,
      sm: 1.067,
      md: 1.125,
      lg: 1.125,
    }
  },
  typeStyles: ( exp ) => {
    return `font-size: ${theme.typography.base * Math.pow( theme.typography.scale.xs, exp )}rem;
    @media ( ${theme.breakpoints.sm} ) {
      font-size: ${theme.typography.base * Math.pow( theme.typography.scale.sm, exp )}rem;
    }
    @media ( ${theme.breakpoints.md} ) {
      font-size: ${theme.typography.base * Math.pow( theme.typography.scale.md, exp )}rem;
    }
    @media ( ${theme.breakpoints.lg} ) {
      font-size: ${theme.typography.base * Math.pow( theme.typography.scale.lg, exp )}rem;
    }`
  },
  vwFontSize: {
    base: {
      nav: '5.5vw',
      para: '5.75vw',
    },
    sm: {
      nav: '2.25vw',
      para: '2.4vw',
    },
  },
  vwLineHeight: {
    nav: '1.16',
    para: '1.3',
  },
};
