import React, { FC } from 'react';
import GroupButtons from '../../../shared/GroupButtons';
import ReactIcon from '../../../../assets/icons/react.png';
import Wrapper from '../../../shared/Wrapper';
import { Avatar, Box, Typography } from '@mui/material';
import AvatarImg from '../../../../assets/images/avatar.jpg';
import Block from '../../../shared/Block';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
type TypeProps = {
  onClick?: (view: string) => void;
}

const MainView: FC<TypeProps> = ({ onClick }) => {
  return (
    <Wrapper>
      <Block>
        <Box display={'flex'} alignItems={'center'} p={1.25} gap={1}>
          <Avatar src={AvatarImg} sx={{ height: 56, width: 56}}/>
          <Box display={'flex'} flexDirection={'column'} gap={0.5}>
            <Typography fontSize={16} fontWeight={'bold'} lineHeight={1.2}>Mykola Nesterchuk</Typography>
            <Typography fontSize={11} lineHeight={1.2}>Software Engineer</Typography>
          </Box>
        </Box>
      </Block>
      <GroupButtons
        links={[
          {name: 'About', icon: <InfoOutlineIcon/>, bg: '#000000', key: 'about' },
        ]}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default MainView;