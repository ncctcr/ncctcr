import React from 'react';
import Block from '../../shared/Block';
import { Box, Grid, Typography } from '@mui/material';
import Description from '../../shared/Description';
import EducationIcon from '../../../assets/icons/dock/education.png';
import Wrapper from '../../shared/Wrapper';
import { EDUCATION_DATA } from './constants';

const Row = (props: {name: string, value: string}) => {
  return (
    <>
      <Grid size={6}>
          <Typography fontSize={14}>{props.name}</Typography>
      </Grid>
      <Grid size={6}>
          <Typography fontSize={14}>{props.value}</Typography>
      </Grid>
    </>
  )
}

const Education = () => {
  return (
    <Wrapper>
      <Description title={'Education'} icon={EducationIcon}>
        Here you can see my diplomas. On personal request I can send the originals to your e-mail address
      </Description>
      {EDUCATION_DATA.map((i, index) => (
        <Block title={i.title} brackets={i.brackets} key={index}>
          <Box p={2}>
            {i.rows.map((row, key) => (
              <Row name={row.name} value={row.value} key={key} />
            ))}
          </Box>
        </Block>
      ))}
    </Wrapper>
  );
};

export default Education;