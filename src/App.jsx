import React, { useState, useEffect } from 'react';
import useWindowSize from './hooks/useWindowSize';
import DesktopLayout from './layout/DesktopLayout';
import DeviceLayout from './layout/DeviceLayout'; // Consolidated Layout

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const { width } = useWindowSize();

  // Responsive Breakpoints
  // Mobile: < 768px
  // Tablet: >= 768px && < 1024px
  // Desktop: >= 1024px

  const isMobile = width !== undefined && width < 768;
  const isTablet = width !== undefined && width >= 768 && width < 1024;
  const isDesktop = width !== undefined && width >= 1024;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Scroll Isolation Logic removed as per user request
    document.body.classList.remove('scroll-lock');

  }, [isDark, isMobile, isTablet]);

  const toggleTheme = () => setIsDark(!isDark);

  if (width === undefined) {
    return <div style={{ minHeight: '100vh', background: isDark ? '#000' : '#fff' }} />;
  }

  if (isDesktop) {
    return <DesktopLayout isDark={isDark} toggleTheme={toggleTheme} />;
  }

  // Mobile & Tablet Layout (Device Mode)
  return (
    <DeviceLayout
      isDark={isDark}
      toggleTheme={toggleTheme}
      variant={isTablet ? 'tablet' : 'mobile'}
    />
  );
}
