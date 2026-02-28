import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import MobileView from "../../components/views/mobile-view/MobileView";
import DesktopView from "../../components/views/desktop-view/DesktopView";

const System = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

    return (
        <div id="system">
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    );
};

export default System;