import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Circle } from '../../../../components/widgets/contacts-widget/ContactsWidget';
import Card from "../../components/card/card";
import { Link } from "react-router";

const DATA = [
    { name: 'Gmail', to: 'mailto:n.ncctcr@gmail.com', icon:  <EmailIcon fontSize={'large'}/> },
    { name: 'LinkedIn', to: 'https://www.linkedin.com/in/ncctcr/', icon: <LinkedInIcon fontSize={'large'}/> },
    { name: 'Telegram', to: 'https://t.me/ncctcr', icon: <TelegramIcon fontSize={'large'}/> },
    { name: 'Instagram', to: 'https://www.instagram.com/ncctcr', icon: <InstagramIcon fontSize={'large'}/> },
]

const Contacts = () => {
    return (
        <Card id={'contact-section'} flexDirection={'column'} p={4}>
            <Typography variant={'h1'} sx={{ fontSize: { xs: '1.50rem', sm: '1.50rem', md: '1.75rem'}}}>Contacts</Typography>
            <Grid container spacing={2}>
                {DATA.map((i, index) => (
                    <Grid size={6} key={index}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1} maxHeight={'106px'}>
                            <Circle borderWidth={10}>
                                <Link to={i.to} target={'_blank'} style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {i.icon}
                                </Link>
                            </Circle>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

export default Contacts;