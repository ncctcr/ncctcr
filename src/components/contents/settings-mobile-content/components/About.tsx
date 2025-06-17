import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';
import Wrapper from '../../../shared/Wrapper';
import Block from '../../../shared/Block';
import Description from '../../../shared/Description';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const projectInfo = [
  { name: 'Name', value: 'ncctcr.github.io' },
  { name: 'Version', value: '0.1.0' },
  { name: 'Hosting', value: 'GitHub Pages' },
  { name: 'Build Tool', value: 'React Scripts 5.0.1' },
]

const coreLibraries = [
  { name: 'React', value: '^19.0.0', description: 'UI library' },
  { name: 'TypeScript', value: '^4.9.5', description: 'Typed JavaScript' },
  { name: 'Material-UI', value: '^7.0.2', description: 'UI components' },
  { name: 'Emotion', value: '^11.14.0', description: 'CSS-in-JS styling' }
];

const utilityLibraries = [
  { name: 'Lodash', value: '^4.17.21', description: 'Data manipulation utilities' },
  { name: 'React-RnD', value: '^10.5.2', description: 'Drag & Drop components' },
  { name: 'Styled Components', value: '^6.1.15', description: 'Styled React components' },
  { name: 'UID', value: '^2.0.2', description: 'Unique ID generation' }
];

const specialLibraries = [
  { name: 'JS-DOS', value: '^7.5.0', description: 'DOS emulator in browser' },
  { name: 'Emulators UI', value: '^0.73.9', description: 'Emulator user interface' }
];

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

const About = () => {
  return (
    <Wrapper>
      <Description title={'About'} icon={<InfoOutlineIcon />}>
          This project is a web application built on a modern technology stack.
          It's based on React 19 with TypeScript to ensure type safety and code reliability.
      </Description>

      <Block title={'Project Info'}>
        <Section data={projectInfo}/>
      </Block>

      <Block title={'Core Technologies'}>
        <Section data={coreLibraries}/>
      </Block>
      <Block title={'Utilities & Components'}>
        <Section data={utilityLibraries}/>
      </Block>
      <Block title={'Emulation & Gaming'}>
        <Section data={specialLibraries}/>
      </Block>
    </Wrapper>
  );
};

export default About;