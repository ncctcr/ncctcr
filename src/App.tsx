import React from 'react';
import './App.css';
import { useMediaQuery, useTheme } from '@mui/material';
import MobileView from './components/views/mobile-view/MobileView';
import DesktopView from './components/views/desktop-view/DesktopView';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}

export default App;
