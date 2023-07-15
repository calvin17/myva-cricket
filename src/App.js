import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import lightTheme from './styles/themes/light';
import CricketDashboard from './components/CricketDashboard';
import MatchInfo from './components/MatchInfo';

const queryClient = new QueryClient();

export default () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path="/match-info" element={<MatchInfo />} />
          <Route path="/" element={<CricketDashboard />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
