import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';
import Wrapper from '../../shared/Wrapper';
import Block from '../../shared/Block';
import Description from '../../shared/Description';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { PROJECT_DETAILS } from './constants';

const Section = ({ data }: {data: {name: string; value: string}[]}) => {
  return (
    <Box display={'grid'} gridTemplateColumns={'auto 1fr'} alignItems={'center'} gap={2} p={2}>
      {data.map((i) => (
        <>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{i.name}</Typography>
          <Typography variant="body2">{i.value}</Typography>
        </>
      ))}
    </Box>
  )
}

const ProjectInfo = () => {
  return (
    <Wrapper>
      <Description title={'About'} icon={<InfoOutlineIcon />}>
        This project is a web application built on a modern technology stack.
        It's based on React 19 with TypeScript to ensure type safety and code reliability.
      </Description>

      {PROJECT_DETAILS.map((i, index) => (
        <Block title={i.title} key={index}>
          <Section data={i.data}/>
        </Block>
      ))}
    </Wrapper>
  );
};

export default ProjectInfo;