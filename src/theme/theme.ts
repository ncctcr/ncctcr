import {createTheme as createMuiTheme} from '@mui/material/styles';
import { darkPalette, lightPalette } from './palette';
import { createThemeComponents } from './components';

export const createTheme = (
  mode: "dark" | "light"
) => {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  // Create base theme
  const baseTheme = createMuiTheme({
    palette,
  });

  // Inject base theme to be used in components
  return createMuiTheme(
    {
      components: createThemeComponents(baseTheme),
    },
    baseTheme
  );
};