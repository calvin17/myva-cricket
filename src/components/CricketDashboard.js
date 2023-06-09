import React from 'react';
import { Link } from 'react-router-dom';

export default function CricketDashboard() {
  return (
    <React.Fragment>
      Cricket Dashboard
      <Link to="/">Home</Link>
      <Link to="/match-info">Match Info</Link>
    </React.Fragment>
  );
}
