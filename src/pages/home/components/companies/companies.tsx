import React from 'react';
import {COMPANIES} from "../../../../constants/experience";
import {Avatar, Box, Chip, Typography} from "@mui/material";
import EmptyLogo from "../../../../assets/images/companies/empty.png";
import {TECHNOLOGIES} from "../../../../constants";
import Card from "../card/card";

const Companies = () => {
    return (
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
    );
};

export default Companies;