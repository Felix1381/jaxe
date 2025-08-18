'use client';

import { useEffect } from 'react';

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply system theme on mount and listen for changes
    const applySystemTheme = () => {
      const root = window.document.documentElement;
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      root.classList.remove('light', 'dark');
      root.classList.add(isDark ? 'dark' : 'light');
    };

    // Apply theme immediately
    applySystemTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applySystemTheme();
    
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return <>{children}</>;
}


