import React from 'react';
import {EDUCATION_DATA} from "../../../../components/contents/education/constants";
import {Box, Typography} from "@mui/material";
import Card from "../card/card";

const getSpeciality = (row: { name: string, value: string }[], name: string) => {
    const foundSpeciality = row.find((i) => i.name === name);
    if (foundSpeciality) return foundSpeciality.value;
    return ''
}

const GRADE_STYLES: Record<string, { border: string; color: string }> = {
    'bachelor': {
        border: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
        color: '#FCF6BA',
    },
    'junior': {
        border: 'linear-gradient(135deg, #8e9eab, #eef2f3, #8e9eab, #d0d8dc, #707f87)',
        color: '#eef2f3',
    },
}

const getGradeStyle = (title: string) => {
    const key = Object.keys(GRADE_STYLES).find((k) => title.toLowerCase().includes(k));
    return key ? GRADE_STYLES[key] : GRADE_STYLES['bachelor'];
}

const Education = () => {
    return (
        <Card id={'education-section'} title={'Education'}>
            {EDUCATION_DATA.map((item, index) => {
                const style = getGradeStyle(item.title);
                return (
                    <Box key={index} style={{
                        background: style.border,
                        borderRadius: 25,
                        padding: '2px',
                    }}>
                        <Box style={{
                            background: 'rgb(26 26 26 / 61%)',
                            borderRadius: 23,
                            padding: '10px',
                            color: style.color,
                        }}>
                            <Typography fontSize={18}>{item.title}</Typography>
                            <Typography fontSize={14}>{getSpeciality(item.rows, 'Programme Subject Area')}</Typography>
                            <Typography fontSize={14}>{getSpeciality(item.rows, 'Date of graduation')}</Typography>
                        </Box>
                    </Box>
                )
            })}
        </Card>
    );
};

export default Education;