import React from 'react';
import Widgets from './components/widgets/Widgets';
import Windows from './components/windows/Windows';
import Dock from './components/dock/Dock'

const DesktopView = () => {
  return (
    <div>
      <Widgets />
      <Windows />
      <Dock />
    </div>
  );
};

export default DesktopView;