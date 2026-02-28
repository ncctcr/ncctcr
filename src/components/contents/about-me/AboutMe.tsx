import React, { Fragment } from 'react';
import { Avatar, Box, Grid, Rating, Typography, Link } from '@mui/material';
import AvatarImg from '../../../assets/images/avatar.jpg'
import Block from '../../shared/Block';
import Wrapper from '../../shared/Wrapper';
import { ABOUT_ME_DATA, LANGUAGES } from '../../../constants/about-me';

const FONT_SIZE = 14;

const AboutMe = () => {
  return (
    <Wrapper>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Avatar src={AvatarImg} sx={{ width: 100, height: 100 }} alt={'Avatar'}/>
        <Typography fontSize={24} fontWeight={'bold'} textAlign={'center'}>Mykola Nesterchuk</Typography>
        <Link
          href={'mailto:n.ncctcr@gmail.com'}
          target={'_blank'}
          color={'grey.300'}
        >
          n.ncctcr@gmail.com
        </Link>
      </Box>
      {ABOUT_ME_DATA.map((i, index) => (
        <Block title={i.title} key={index}>
          <Box display={'flex'} flexDirection={'column'} p={2} gap={2}>
            {i.rows.map((item, key) => (
              <Typography fontSize={FONT_SIZE} key={key}>{item}</Typography>
            ))}
          </Box>
        </Block>
      ))}
      <Grid container spacing={2} width={'100%'}>
        <Grid size={12}>
          <Block title={'Languages'}>
            <Box p={2}>
              <Grid container spacing={2}>
                {LANGUAGES.map((item, index) => (
                  <Fragment key={index}>
                    <Grid size={6}>
                      <Typography fontSize={FONT_SIZE}>{item.name}</Typography>
                    </Grid>
                    <Grid size={6}>
                      <Rating value={item.level} readOnly />
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Box>
          </Block>
        </Grid>
        <Grid size={12}>
          <Block title={'Location'}>
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>Country</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>Bulgaria</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>City</Typography>
                </Grid>
                <Grid size={6}>
                  <Typography fontSize={FONT_SIZE}>Plovdiv</Typography>
                </Grid>
              </Grid>
            </Box>
          </Block>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutMe;