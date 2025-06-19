import React, { FC } from 'react';
import GroupButtons from '../../../../shared/GroupButtons';
import Wrapper from '../../../../shared/Wrapper';
import { Avatar, Box, Typography } from '@mui/material';
import AvatarImg from '../../../../../assets/images/avatar.jpg';
import Block from '../../../../shared/Block';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

type TypeProps = {
  onClick?: (view: string) => void;
}

const MainView: FC<TypeProps> = ({ onClick }) => {
  return (
    <Wrapper>
      <Block>
        <Box
          display={'flex'}
          alignItems={'center'}
          p={1.25}
          gap={1}
          onClick={() => onClick && onClick('about_me')}
        >
          <Avatar src={AvatarImg} sx={{ height: 56, width: 56}}/>
          <Box display={'flex'} flexDirection={'column'} gap={0.5}>
            <Typography fontSize={16} fontWeight={'bold'} lineHeight={1.2}>Mykola Nesterchuk</Typography>
            <Typography fontSize={12} lineHeight={1.2}>Software Engineer</Typography>
          </Box>
        </Box>
      </Block>
      <GroupButtons
        links={[
          {name: 'About', icon: <InfoOutlineIcon />, bg: '#000000', key: 'about' },
          {name: 'Release Notes', icon: <NewReleasesIcon />, bg: '#000000', key: 'release_notes' },
        ]}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default MainView;