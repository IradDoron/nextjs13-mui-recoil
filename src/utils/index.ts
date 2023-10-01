import customDefaults from '@/themes/customDefaults';
import { ThemeOptions, createTheme } from '@mui/material/styles';

export const createCustomPalette = (customPalette: ThemeOptions['palette']) => {
	return createTheme({
		...customDefaults,
		palette: {
			...customPalette,
		},
	});
};
