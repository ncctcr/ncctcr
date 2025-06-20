import React, { useState } from 'react';
import Description from '../../shared/Description';
import ContactIcon from '../../../assets/icons/dock/contact.png';
import { Box, Button, Divider, Link, Tooltip, Typography } from '@mui/material';
import Block from '../../shared/Block';
import Wrapper from '../../shared/Wrapper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';
import { SOCIAL_MEDIA } from './constants';

const Contacts = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <Wrapper>
      <Description title={'Contacts'} icon={ContactIcon}>
        If you have any interest in contacting me for any suggestions, or just browsing through my social media, or you're just browsing this tab, then I'll just leave my links here.
      </Description>
      {SOCIAL_MEDIA.map((item, index) => (
        <Block key={index}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={1.5}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              {item.icon}
              <Divider orientation={'vertical'} sx={{ bgcolor: 'rgba(113, 113, 113, 0.44)' }} flexItem/>
              <Box>
                <Typography fontSize={15}>{item.name}</Typography>
                <Tooltip title={copiedIndex === index ? 'Copied' : ''} arrow placement={'top'}>
                  <Button
                    color={'inherit'}
                    variant={'text'}
                    sx={{ textTransform: 'lowercase', p: 0.5, color: 'grey.400' }}
                    onClick={() => handleCopy(item.tag, index)}
                  >
                    <Box display={'flex'} alignItems={'center'} gap={0.5}>
                      <ContentCopyIcon fontSize={'small'} />
                      <Typography fontSize={14}>{item.tag}</Typography>
                    </Box>
                  </Button>
                </Tooltip>
              </Box>
            </Box>
            <Box>
              <Link color={'grey.600'} href={item.link} target={'_blank'} fontSize={14}>
                <LaunchIcon fontSize={'medium'}/>
              </Link>
            </Box>
          </Box>
        </Block>
      ))}
    </Wrapper>
  );
};

export default Contacts;