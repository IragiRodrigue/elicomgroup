// Utility functions for color manipulation and injection

export interface CompanyColors {
  primary: string;
  secondary: string;
  accent: string;
}

// Convert hex color to RGB values
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error('Invalid hex color');
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r} ${g} ${b}`;
}

// Generate color shades from a base color
export function generateColorShades(baseColor: string): Record<string, string> {
  const rgb = hexToRgb(baseColor);
  const [r, g, b] = rgb.split(' ').map(Number);
  
  // Generate shades by adjusting lightness
  const shades: Record<string, string> = {};
  
  // Lighter shades (50, 100, 200, 300, 400)
  const lightSteps = [0.95, 0.9, 0.8, 0.6, 0.4];
  const lightKeys = ['50', '100', '200', '300', '400'];
  
  lightKeys.forEach((key, index) => {
    const factor = lightSteps[index];
    const newR = Math.round(r + (255 - r) * factor);
    const newG = Math.round(g + (255 - g) * factor);
    const newB = Math.round(b + (255 - b) * factor);
    shades[key] = `${newR} ${newG} ${newB}`;
  });
  
  // Base color (500)
  shades['500'] = rgb;
  
  // Darker shades (600, 700, 800, 900)
  const darkSteps = [0.8, 0.6, 0.4, 0.2];
  const darkKeys = ['600', '700', '800', '900'];
  
  darkKeys.forEach((key, index) => {
    const factor = darkSteps[index];
    const newR = Math.round(r * factor);
    const newG = Math.round(g * factor);
    const newB = Math.round(b * factor);
    shades[key] = `${newR} ${newG} ${newB}`;
  });
  
  return shades;
}

// Apply company colors to CSS custom properties
export function applyCompanyColors(colors: CompanyColors): void {
  const root = document.documentElement;
  
  try {
    // Generate shades for each color
    const primaryShades = generateColorShades(colors.primary);
    const secondaryShades = generateColorShades(colors.secondary);
    const accentShades = generateColorShades(colors.accent);
    
    // Apply primary color shades
    root.style.setProperty('--color-primary', primaryShades['500']);
    Object.entries(primaryShades).forEach(([shade, value]) => {
      root.style.setProperty(`--color-primary-${shade}`, value);
    });
    
    // Apply secondary color shades
    root.style.setProperty('--color-secondary', secondaryShades['500']);
    Object.entries(secondaryShades).forEach(([shade, value]) => {
      root.style.setProperty(`--color-secondary-${shade}`, value);
    });
    
    // Apply accent color shades
    root.style.setProperty('--color-accent', accentShades['500']);
    Object.entries(accentShades).forEach(([shade, value]) => {
      root.style.setProperty(`--color-accent-${shade}`, value);
    });
    
    console.log('Company colors applied successfully');
  } catch (error) {
    console.error('Error applying company colors:', error);
  }
}

// Reset colors to default
export function resetToDefaultColors(): void {
  const root = document.documentElement;
  
  // Remove all custom color properties
  const properties = [
    '--color-primary', '--color-secondary', '--color-accent',
    '--color-primary-50', '--color-primary-100', '--color-primary-200', '--color-primary-300', '--color-primary-400',
    '--color-primary-500', '--color-primary-600', '--color-primary-700', '--color-primary-800', '--color-primary-900',
    '--color-secondary-50', '--color-secondary-100', '--color-secondary-200', '--color-secondary-300', '--color-secondary-400',
    '--color-secondary-500', '--color-secondary-600', '--color-secondary-700', '--color-secondary-800', '--color-secondary-900',
    '--color-accent-50', '--color-accent-100', '--color-accent-200', '--color-accent-300', '--color-accent-400',
    '--color-accent-500', '--color-accent-600', '--color-accent-700', '--color-accent-800', '--color-accent-900'
  ];
  
  properties.forEach(prop => {
    root.style.removeProperty(prop);
  });
  
  console.log('Colors reset to default');
}