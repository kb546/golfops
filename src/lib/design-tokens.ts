/**
 * GolfOps Design System Tokens
 *
 * Color palette extracted from logo and organized using 60-30-10 rule
 * 60% - Neutral Foundation (backgrounds, large surfaces)
 * 30% - Brand Identity (headers, navigation, key elements)
 * 10% - Accent & Energy (CTAs, highlights, interactions)
 */

export const colors = {
  foundation: {
    bg0: '#070B09',
    bg1: '#0D1411',
    bg2: '#121B17',
    surface: '#18231E',
    surface2: '#203029',
    borderSubtle: '#25342D',
    textPrimary: '#EAF2EE',
    textSecondary: '#B4C2BA',
    textMuted: '#87958D',
  },

  // ============================================
  // 60% - NEUTRAL FOUNDATION
  // ============================================
  neutral: {
    white: '#0D1411',
    cloud: '#121B17',
    mist: '#18231E',
    light: '#203029',
    gray: '#87958D',
    slate: '#B4C2BA',
    charcoal: '#EAF2EE',
    black: '#070B09',
  },

  // ============================================
  // 30% - BRAND IDENTITY (from logo analysis)
  // ============================================
  brand: {
    // Primary forest greens
    forestDeep: '#0D2818',      // New primary dark
    forest: '#1B4332',           // Secondary dark
    forestMedium: '#2D6A4F',     // Interactive elements
    emerald: '#2D6A4F',          // Brand emerald / interactive

    // Logo-derived colors
    mintFresh: '#6aeb99',        // From logo gradient end
    limeBurst: '#d1fc31',        // From logo gradient start
    greenAccent: '#a7f46e',      // Logo highlight color
  },

  // ============================================
  // 10% - ACCENT & ENERGY
  // ============================================
  accent: {
    lime: '#d1fc31',             // Primary accent
    limeLight: '#e0fd6f',        // Lighter variant
    limeDark: '#b8e028',         // Darker variant

    mint: '#6aeb99',             // Secondary accent
    mintLight: '#8ff0b0',        // Lighter variant
    mintDark: '#52d685',         // Darker variant

    green: '#a7f46e',            // Tertiary accent
    greenLight: '#bef78c',       // Lighter variant
    greenDark: '#8fe555',        // Darker variant

    gold: '#D4A843',             // Premium accent
    goldLight: '#F0D78C',        // Lighter variant
  },

  // ============================================
  // STATUS COLORS
  // ============================================
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

// ============================================
// GRADIENTS (from logo)
// ============================================
export const gradients = {
  // Primary brand gradient (from logo)
  primary: 'linear-gradient(135deg, #d1fc31 0%, #6aeb99 100%)',

  // Subtle gradient for accents
  subtle: 'linear-gradient(135deg, #6aeb99 0%, #a7f46e 100%)',

  // Dark brand gradient
  darkBrand: 'linear-gradient(135deg, #0D2818 0%, #1B4332 100%)',

  // Accent glow for hovers
  accentGlow: 'linear-gradient(135deg, #a7f46e 0%, #d1fc31 100%)',

  // Soft background gradient
  softBackground: 'linear-gradient(180deg, #0D1411 0%, #121B17 100%)',

  // Dark section gradient
  darkSection: 'linear-gradient(135deg, #070B09 0%, #0D1411 100%)',
} as const;

// ============================================
// SHADOWS
// ============================================
export const shadows = {
  soft: '0 1px 2px rgba(0, 0, 0, 0.05)',
  card: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.06)',

  // Gradient glow shadows
  glow: {
    lime: '0 4px 12px rgba(209, 252, 49, 0.25)',
    limeHover: '0 6px 20px rgba(209, 252, 49, 0.35)',
    mint: '0 4px 12px rgba(106, 235, 153, 0.25)',
    green: '0 4px 12px rgba(167, 244, 110, 0.25)',
  },
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const radius = {
  sm: '6px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
} as const;

// ============================================
// SPACING (8px grid system)
// ============================================
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '80px',
  '6xl': '96px',
} as const;

// ============================================
// TYPOGRAPHY
// ============================================
export const typography = {
  fonts: {
    heading: 'var(--font-plus-jakarta)',
    body: 'var(--font-inter)',
  },

  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

// ============================================
// BREAKPOINTS
// ============================================
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// LOGO USAGE GUIDELINES
// ============================================
export const logoConfig = {
  variants: {
    // Gradient logo for light backgrounds
    primary: '/Golf_Ops_Logo/SVG/Logo_Type_1.svg',
    primaryMark: '/Golf_Ops_Logo/SVG/Logo_Mark_1.svg',

    // White logo for dark backgrounds
    white: '/Golf_Ops_Logo/SVG/Logo_Type_2.svg',
    whiteMark: '/Golf_Ops_Logo/SVG/Logo_Mark_2.svg',

    // Solid logo for single-color needs
    solid: '/Golf_Ops_Logo/SVG/Logo_Type_3.svg',
    solidMark: '/Golf_Ops_Logo/SVG/Logo_Mark_3.svg',
  },

  sizes: {
    nav: {
      width: 230,
      height: 76,
      maxHeight: '56px',
    },
    footer: {
      width: 300,
      height: 100,
      maxHeight: '80px',
    },
    mobile: {
      width: 40,
      height: 40,
    },
  },

  // Breakpoint for switching to logo mark only
  mobileBreakpoint: 640,
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get appropriate logo variant based on background color
 */
export function getLogoVariant(
  backgroundColor: 'light' | 'dark',
  size: 'nav' | 'footer' | 'mobile' = 'nav'
): string {
  const isDark = backgroundColor === 'dark';

  if (size === 'mobile') {
    return isDark ? logoConfig.variants.whiteMark : logoConfig.variants.primaryMark;
  }

  return isDark ? logoConfig.variants.white : logoConfig.variants.primary;
}

/**
 * Check if a color is considered dark (for contrast calculations)
 */
export function isDarkColor(hexColor: string): boolean {
  // Convert hex to RGB
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance < 0.5;
}

// ============================================
// EXPORTS
// ============================================
export const designTokens = {
  colors,
  gradients,
  shadows,
  radius,
  spacing,
  typography,
  breakpoints,
  logoConfig,
} as const;

export default designTokens;
