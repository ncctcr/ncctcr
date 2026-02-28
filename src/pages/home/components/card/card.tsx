import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import React, {FC, ReactNode, useRef} from 'react';
import {Box, BoxProps, Typography} from "@mui/material";
import {Link} from "react-router";

type TypeProps = BoxProps & {
    id?: string;
    title?: string;
    link?: string;
    shine?: boolean;
    shineDuration?: number;
    isNew?: boolean;
    newLabel?: string;
    children: ReactNode;
};

const shineKeyframes = `
  @keyframes shine {
    0%   { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
    5%   { opacity: 1; }
    20%  { transform: translateX(200%) skewX(-15deg); opacity: 0; }
    100% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
  }
`;

const Card: FC<TypeProps> = ({
    id = '',
    title,
    link,
    shine = false,
    shineDuration = 5,
    isNew = false,
    newLabel = 'NEW',
    children,
    ...boxProps
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.setProperty('--opacity', '1');
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.setProperty('--opacity', '0');
    };

    const content = (
        <Box
            ref={cardRef}
            id={id}
            display={'flex'}
            flexDirection={'column'}
            gap={2}
            p={4}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                boxShadow: 'rgb(255 255 255 / 18%) 0px 0px 0px 1px',
                background: 'rgb(224 224 224 / 9%)',
                backdropFilter: 'blur(25px)',
                cursor: link ? 'pointer' : 'default',
                position: 'relative',
                overflow: 'hidden',
                ['--mouse-x' as any]: '0px',
                ['--mouse-y' as any]: '0px',
                ['--opacity' as any]: '0',
            }}
            sx={{
                borderRadius: 7,
                height: '100%',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    padding: '1px',
                    background: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 70%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    opacity: 'var(--opacity)',
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    padding: '1px',
                    background: '#666 -1px -1px 0px, #181818 1px 1px 0px',
                    boxShadow: '#666 -1px -1px 0px, #181818 1px 1px 0px',
                    pointerEvents: 'none',
                },
            }}
            {...boxProps}
        >
            {shine && (
                <>
                    <style>{shineKeyframes}</style>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '40%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                        animation: `shine ${shineDuration}s ease-in-out infinite`,
                        pointerEvents: 'none',
                    }} />
                </>
            )}

            {isNew && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 18,
                        right: -28,
                        width: 110,
                        py: '4px',
                        textAlign: 'center',
                        transform: 'rotate(-45deg)',
                        background: 'linear-gradient(135deg, #0eab00 0%, #beffb8 100%)',
                        color: '#111',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                        zIndex: 10,
                        pointerEvents: 'none',
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    {newLabel}
                </Box>
            )}

            {title && <Typography variant='h2' sx={{ fontSize: { xs: '1.50rem', sm: '1.50rem', md: '1.75rem'}}}>{title}</Typography>}
            {children}
        </Box>
    );

    if (link) {
        return <Link to={link} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>{content}</Link>;
    }

    return content;
};

export default Card;