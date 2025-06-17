import React, { useState } from 'react';
import Description from '../shared/Description';
import ContactIcon from '../../assets/icons/dock/contact.png';
import { Box, Button, Divider, Link, Tooltip, Typography } from '@mui/material';
import Block from '../shared/Block';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import Wrapper from '../shared/Wrapper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';

const DESCRIPTION = 'If you have any interest in contacting me for any suggestions, or just browsing through my social media, or you\'re just browsing this tab, then I\'ll just leave my links here.'

const SOCIAL_MEDIA = [
  {
    name: 'Write me on Gmail',
    tag: 'n.ncctcr@gmail.com',
    icon: <EmailIcon fontSize={'large'} />,
    link: 'mailto:n.ncctcr@gmail.com',
    bg: '#dd5247'
  },
  {
    name: 'Connect on LinkedIn',
    tag: '@ncctcr',
    icon: <LinkedInIcon fontSize={'large'} />,
    link: 'https://www.linkedin.com/in/ncctcr/',
    bg: '#1082bc'
  },
  {
    name: 'Message me on Telegram',
    tag: '@ncctcr',
    icon: <TelegramIcon fontSize={'large'} />,
    link: 'https://t.me/ncctcr',
    bg: '#32acea'
  },
  {
    name: 'My Store on Instagram',
    tag: '@ncctcr',
    icon: <InstagramIcon fontSize={'large'} />,
    link: 'https://www.instagram.com/ncctcr',
    bg: '#db1456'
  }
]

const ContactsContent = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <Wrapper>
      <Description title={'Contacts'} icon={ContactIcon}>
        {DESCRIPTION}
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

export default ContactsContent;