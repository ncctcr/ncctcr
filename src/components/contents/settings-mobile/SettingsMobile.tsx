import React, { useState } from 'react';
import MainView from './components/main-view/MainView';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProjectInfo from '../project-info/ProjectInfo';
import ReleaseNotes from '../release-notes/ReleaseNotes';
import AboutMe from '../about-me/AboutMe';

const Buttons = styled.div`
  position: absolute;
  top: 6px;
  left: 75px;
  z-index: 3;
  display: flex;
  gap: 5px;
  button {
    min-width: unset;
    padding: 5px;
    color: gray;
  }
`

const SettingsMobile = () => {
  const [selectedView, setSelectedView] = useState<string | null>(null);

  const handleGoBack = () => {
    setSelectedView(null);
  }

  return (
    <>
      <Buttons>
        <Button disabled={selectedView === null} onClick={handleGoBack}>
          <ArrowBackIosNewIcon />
        </Button>
        <Button disabled>
          <ArrowForwardIosIcon />
        </Button>
      </Buttons>
      {selectedView === null && (
        <MainView onClick={setSelectedView} />
      )}
      {selectedView === 'about' && <ProjectInfo />}
      {selectedView === 'release_notes' && <ReleaseNotes />}
      {selectedView === 'about_me' && <AboutMe />}
    </>
  );
};

export default SettingsMobile;