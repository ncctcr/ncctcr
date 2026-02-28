import {PaletteMode} from "@mui/material";

const palette = {
  grey: {
    "50": "#ECEFF1",
    "100": "#CFD8DC",
    "200": "#B0BEC5",
    "300": "#90A4AE",
    "400": "#78909C",
    "500": "#607D8B",
    "600": "#546E7A",
    "700": "#455A64",
    "800": "#37474F",
    "900": "#263238",
  },
  black: {
    "100": "#e3e3e3",
    "300": "#c0c0c0",
    "600": "#6c6c6c",
    "800": "#212121",
    "900": "#000000"
  }
};

export const darkPalette = {
  ...palette,
  contrastThreshold: 4.5,
  mode: "dark" as PaletteMode,
  error: {
    main: "#FF8A65",
  },
  info: {
    main: "#4FC3F7",
  },
  primary: {
    main: "#64B5F6",
    contrastText: palette.grey[900],
  },
  secondary: {
    main: palette.grey[900],
  },
  success: {
    main: "#81C784",
  },
  warning: {
    main: "#FFD54F",
  },
  text: {
    primary: palette.black[100],
    secondary: palette.black[300],
    disabled: palette.black[600],
  },
  divider: palette.grey[700],
  background: {
    paper: palette.grey[900],
    default: palette.black[900],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[800],
  },
};

export const lightPalette = {
  ...palette,
  contrastThreshold: 3,
  mode: "light" as PaletteMode,
  error: {
    main: "#FF3D00",
  },
  info: {
    main: "#00B0FF",
  },
  primary: {
    main: "#2962FF",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#FFF",
  },
  success: {
    main: "#00E676",
  },
  warning: {
    main: "#FFC400",
  },
  text: {
    primary: palette.grey[700],
    secondary: palette.grey[500],
    disabled: palette.grey[300],
  },
  divider: palette.grey[100],
  background: {
    paper: "#FFF",
    default: palette.grey[50],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[50],
  },
};