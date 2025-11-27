import React from 'react';
import { ThemeProvider } from '@mselmank/design-system-package';
import { LandingPage } from './LandingPage';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
