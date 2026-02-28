import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import React from 'react';
import {Avatar, Box, Chip, Container, Grid, Typography} from "@mui/material";
import Header from "./components/header/header";
import {ABOUT_ME_DATA} from "../../constants/about-me";
import {TECHNOLOGIES} from "../../constants";
import Card from "./components/card/card";
import Contacts from './components/contacts/contacts'
import {COMPANIES} from "../../constants/experience";
import EmptyLogo from "../../assets/images/companies/empty.png";
import {Skill} from "../../constants/skills";
import BackgroundText from "./components/background-text/background-text";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "../../theme";
import Marquee from "./components/marquee/marquee";
import Education from "./components/education/education";
import UnitedWidget from "../../components/widgets/united-widget/UnitedWidget";
import avatarSrc from "../../assets/images/avatar.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const montserratTheme = createTheme({
    ...theme,
    typography: {
        fontFamily: "'Montserrat', sans-serif",
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={montserratTheme}>
            <Container maxWidth={'xl'} sx={{ padding: 0 }}>
                <Box display={'flex'} flexDirection={'column'} gap={2} p={2}>
                    <Header />
                    <BackgroundText text={'NCCTCR'} />
                    <Box height={'56dvh'}></Box>
                    <Grid container spacing={3}>
                        <Grid size={{xs: 12, md: 6, lg: 3 }}>
                            <Card p={0}>
                                <img src={avatarSrc} alt="Avatar" style={{ height: '100%', borderRadius: 28, objectFit: 'cover'}}/>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                            <Card title={'About'} flexDirection={'column'}>
                                <Typography>{ABOUT_ME_DATA[0].rows[0]}</Typography>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12, lg: 6}}>
                            <Card id={'system-section'} flexDirection={{ xs: 'column', md: 'row' }} link={'/system'} shine isNew>
                                <Box display={'flex'} flexDirection={'column'} gap={2}>
                                    <Typography variant={'h2'} sx={{ fontSize: { xs: '1.50rem', sm: '1.50rem', md: '1.75rem'}, display: 'flex', alignItems: 'center', gap: 1}}>The Next-Gen Portfolio <ArrowOutwardIcon style={{fontSize: '2rem'}}/></Typography>
                                    <Typography>Forget boring CVs. I've created an interactive macOS-style environment where you can open projects, explore skills, and get to know me as a developer.</Typography>
                                </Box>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <img src="/images/preview-v2.png" alt="Preview OS" style={{height: '100%', maxWidth: 260, objectFit: 'contain'}}/>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12, lg: 3}}>
                            <Grid container spacing={3} height={'100%'}>
                                <Grid size={12}>
                                    <Card id={'stack-section'} title={'Current stack'}>
                                        <Marquee items={[
                                            Skill.React,
                                            Skill.NextJS,
                                            Skill.TypeScript,
                                            Skill.HTML,
                                            Skill.SCSS,
                                            Skill.GIT,
                                            Skill.RestAPI,
                                            Skill.GraphQL
                                        ]} duration={60} />
                                    </Card>
                                </Grid>
                                <Grid size={12}>
                                    <Card id={'skills-section'} title={'Skills'} flexDirection={'column'}>
                                        <Marquee items={TECHNOLOGIES} duration={60} />
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 3}}>
                            <Contacts />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 3}}>
                            <Card id={'education-section'} title={'Education'}>
                                <Education />
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4, lg: 3}} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Card p={0} style={{ filter: 'grayscale(1)' }}>
                                <UnitedWidget />
                            </Card>
                        </Grid>
                        <Grid size={12}>
                            <Card id={'experience-section'} title={'Experience'} flexDirection={'column'} gap={3}>
                                {COMPANIES.map((company, index) => (
                                    <Box display={'flex'} gap={1} key={index}>
                                        <Box>
                                            <Avatar src={company.logo ? company.logo : EmptyLogo} alt={company.name}/>
                                        </Box>
                                        <Box display={'flex'} flexDirection={'column'} minWidth={0} flex={1}>
                                            <Typography fontWeight={600}>{company.position}</Typography>
                                            <Typography>{company.name} - {company.type}</Typography>
                                            <Typography fontSize={14} style={{ opacity: 0.8 }}>{company.startDate} - {company.endDate}</Typography>
                                            <Typography fontSize={14} style={{ opacity: 0.8 }}>{company.location}</Typography>
                                            <Box display={'flex'} flexWrap={'wrap'} gap={1} mt={2}>
                                                {company.skills.map((skill, index) => {
                                                    const foundSkill = TECHNOLOGIES.find((i) => i.key === skill);
                                                    return (
                                                        <Chip key={index} variant={'outlined'} label={foundSkill ? foundSkill.name : ''}/>
                                                    )
                                                })}
                                            </Box>
                                            <Box mt={2}>
                                               <ol style={{paddingLeft: 20, listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 5}}>
                                                   {company.list && company.list.map((item, index) => (
                                                       <li key={index}><Typography>{item}</Typography></li>
                                                   ))}
                                               </ol>
                                            </Box>
                                        </Box>

                                    </Box>
                                ))}
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Home;