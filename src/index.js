import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import lightTheme from './styles/themes/light';
import CricketDashboard from './components/CricketDashboard';
import MatchInfo from './components/MatchInfo';
import SeriesList from './components/SeriesList';
import LiveMatches from './components/LiveMatches';
import SearchSeries from './components/SearchSeries';

const queryClient = new QueryClient();

export default () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path="/match-info" element={<MatchInfo />} />
          <Route path="/" element={<CricketDashboard />}>
            <Route path="/" element={<SeriesList />} />
            <Route path="live" element={<LiveMatches />} />
            <Route path="search" element={<SearchSeries />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
