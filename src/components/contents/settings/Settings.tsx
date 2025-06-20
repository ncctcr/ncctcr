import React, { ReactNode, useState } from 'react';
import { Avatar, Box, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import AboutMe from '../about-me/AboutMe';
import Wallpaper from './components/wallpaper/Wallpaper';
import AvatarImg from '../../../assets/images/avatar.jpg';
import ReleaseNotes from '../release-notes/ReleaseNotes';
import ProjectInfo from '../project-info/ProjectInfo';
import CollectionsIcon from '@mui/icons-material/Collections';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const Wrapper = styled(Box)`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`

const Content = styled(Box)`
  height: 100%;
	width: 100%;
  background: #2e2e2e;
  overflow: auto;
`

const Sidebar = styled(Box)`
  margin-top: 40px;
  width: 290px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Search = styled(TextField)`
  .MuiOutlinedInput-input {
		padding:  5.5px 14px !important;
    font-size: 13px !important;
  }
`

const Header = styled(Box)`
  display: flex;
  width: 100%;
	background: #2e2e2e;
  min-height: 46px;
  padding: 0 20px;
  border-bottom: 1px solid #1d1d1d;
`

const SidebarItem = styled(Box)<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ selected }) => selected ? '#1756bb' : 'unset'};
  border-radius: 5px;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
`

const Container = ({ title, children }: {title: string, children: React.ReactNode}) => {
  return (
    <>
      <Header display={'flex'} alignItems={'center'}>
        <Typography fontSize={16} fontWeight={'bold'}>{title}</Typography>
      </Header>
      <Content>
        {children}
      </Content>
    </>
  );
}

const SIDEBAR_ITEMS = [
  { title: 'Wallpaper', key: 'wallpaper', icon: <CollectionsIcon fontSize={'small'} /> },
  { title: 'Release Notes', key: 'release_notes', icon: <NewReleasesIcon fontSize={'small'} /> },
  { title: 'About', key: 'about', icon: <InfoOutlineIcon fontSize={'small'} /> },
]

const Settings = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>('wallpaper');

  const getContent = (key: string | null) => {
    const CONTENT: {[key: string]: ReactNode} = {
      'about_me': <Container title={'About me'} children={<AboutMe/>}/>,
      'wallpaper': <Wallpaper />,
      'release_notes': <Container title={'Release Notes'} children={<ReleaseNotes/>}/>,
      'about': <Container title={'About'} children={<ProjectInfo />}/>
    }

    return key ? CONTENT[key] || null : null;
  }

  return (
    <Wrapper>
      <Sidebar>
        <Box>
          <Search placeholder={'Search'} variant="outlined" size={'small'} fullWidth/>
        </Box>
        <SidebarItem selected={selectedContent === 'about_me'} onClick={() => setSelectedContent('about_me')}>
          <Avatar src={AvatarImg}/>
          <Box>
            <Typography fontSize={13} fontWeight={'bold'} lineHeight={1.2}>Mykola Nesterchuk</Typography>
            <Typography fontSize={11} lineHeight={1.2}>Software Engineer</Typography>
          </Box>
        </SidebarItem>

        <Box display={'flex'} flexDirection={'column'} gap={1}>
          {SIDEBAR_ITEMS.map((item, index) => (
            <SidebarItem
              key={index}
              padding={0.5}
              selected={selectedContent === item.key}
              onClick={() => setSelectedContent(item.key)}>
              {item.icon}
              <Typography fontSize={13} fontWeight={500}>{item.title}</Typography>
            </SidebarItem>
          ))}
        </Box>

      </Sidebar>
      <Box width={'100%'} height={'calc(100% - 46px)'}>
        {getContent(selectedContent)}
      </Box>
    </Wrapper>
  );
};

export default Settings;