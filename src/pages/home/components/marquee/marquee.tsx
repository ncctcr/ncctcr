import React, {FC, useEffect, useRef, useState} from 'react';
import {Box, Typography} from "@mui/material";

type Item = { key: string; name: string } | string;

type TypeProps = {
    items: Item[];
    duration?: number;
    fontSize?: number;
    gap?: number;
};

const getName = (item: Item) => typeof item === "string" ? item : item.name;

const Marquee: FC<TypeProps> = ({ items, duration = 15, gap = 16, fontSize = 18 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef<number>(0);
    const frameRef = useRef<number>(0);
    const [visibleItems, setVisibleItems] = useState<{ item: Item; id: number }[]>([]);
    const idRef = useRef<number>(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        positionRef.current = 0;
        const initial = items.map(item => ({ item, id: idRef.current++ }));
        setVisibleItems(initial);

        const speed = 1000 / (duration * 60);

        const animate = () => {
            positionRef.current -= speed;
            container.style.transform = `translateX(${positionRef.current}px)`;

            const firstChild = container.firstElementChild as HTMLElement;
            if (firstChild) {
                const firstWidth = firstChild.offsetWidth + gap;
                if (Math.abs(positionRef.current) >= firstWidth) {
                    positionRef.current += firstWidth;
                    setVisibleItems(prev => {
                        const [first, ...rest] = prev;
                        return [...rest, { item: first.item, id: idRef.current++ }];
                    });
                }
            }

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [items, duration, gap]);

    return (
        <Box
            overflow={'hidden'}
            sx={{
                py: '1px',
                maskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
            }}
        >
            <Box
                ref={containerRef}
                display={'flex'}
                sx={{
                    gap: `${gap}px`,
                    width: 'max-content',
                    willChange: 'transform',
                }}
            >
                {visibleItems.map(({ item, id }) => (
                    <Typography key={id} whiteSpace={'nowrap'} fontSize={fontSize} sx={{
                        border: '1px solid #d4d4d4',
                        borderRadius: 10,
                        padding: '10px',
                        color: '#d4d4d4'
                    }}>
                        {getName(item)}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Marquee;