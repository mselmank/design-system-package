import  { useEffect, useState } from 'react';
import { ThemeProvider } from '@mselmank/design-system-package';
import { LandingPage } from './LandingPage';
import { ComponentsShowcase } from './ComponentsShowcase';

function App() {
  const [route, setRoute] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const handler = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <ThemeProvider>
      {route === '#components' ? <ComponentsShowcase /> : <LandingPage />}
    </ThemeProvider>
  );
}

export default App;
