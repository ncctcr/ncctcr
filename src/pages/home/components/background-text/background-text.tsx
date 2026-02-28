import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";

type TypeProps = {
    text: string;
    typingSpeed?: number;
    cursorHideDelay?: number;
}

const BackgroundText: FC<TypeProps> = ({
    text,
    typingSpeed = 120,
    cursorHideDelay = 2000,
}) => {
    const [displayed, setDisplayed] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        setDisplayed('');
        setShowCursor(true);

        let i = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const typeNext = () => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
                setTimeout(() => setShowCursor(false), cursorHideDelay);
                return;
            }
            const jitter = typingSpeed * (0.5 + Math.random() * 1.5);
            timeout = setTimeout(typeNext, jitter);
        };

        timeout = setTimeout(typeNext, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, typingSpeed, cursorHideDelay]);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                whiteSpace: 'nowrap',
            }}
        >
            <Typography
                sx={{
                    fontSize: '12vw',
                    fontWeight: 800,
                    opacity: 0.6,
                    lineHeight: 1,
                    borderRight: '0.06em solid currentColor',
                    borderRightColor: showCursor ? 'currentColor' : 'transparent',
                    transition: showCursor ? 'none' : 'border-color 0.4s ease',
                    pr: '0.1em',
                    animation: showCursor ? 'blink 1s step-end infinite' : 'none',
                    '@keyframes blink': {
                        '0%, 100%': { borderRightColor: 'currentColor' },
                        '50%': { borderRightColor: 'transparent' },
                    },
                }}
            >
                {displayed}
            </Typography>
        </Box>
    );
};

export default BackgroundText;