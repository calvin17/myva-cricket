import React from 'react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

import CricketDashboard from './components/CricketDashboard';
import MatchInfo from './components/MatchInfo';

export default () => {
  return (
    <div>
      <MemoryRouter>
        <Routes>
          <Route exact path="/match-info" element={<MatchInfo />} />
          <Route path="/" element={<CricketDashboard />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
};
