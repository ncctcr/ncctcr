import React, { useEffect, useState } from 'react';
import {Box, Typography} from '@mui/material';

const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const formatter = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Europe/Sofia',
                hour: '2-digit',
                minute: '2-digit',
            });

            setTime(formatter.format(new Date()));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1rem', md: '1.125rem' } }}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                Bulgaria,
            </Box>
            Plovdiv • {time}
        </Typography>
    );
};

export default Time;
