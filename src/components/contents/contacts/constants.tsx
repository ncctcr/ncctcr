import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SOCIAL_MEDIA = [
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
];