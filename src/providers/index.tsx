import {BackgroundProvider} from "../contexts/BackgroundContext";
import GothicLion from "../assets/backgrounds/gothic-lion.jpg";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "../theme/theme";
import {WindowsProvider} from "../contexts/WindowContext";
import React, { FC, ReactNode } from "react";
import {BrowserRouter} from "react-router";

type TypeProps = {
  children: ReactNode
}

const Providers: FC<TypeProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <BackgroundProvider defaultBackground={`url(${GothicLion})`}>
        <ThemeProvider theme={createTheme('dark')}>
          <WindowsProvider>
            <CssBaseline/>
              {children}
          </WindowsProvider>
        </ThemeProvider>
      </BackgroundProvider>
    </BrowserRouter>
  );
}

export default Providers