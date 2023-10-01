import dark from '@/themes/dark';
import light from '@/themes/light';
import muiLight from '@/themes/muiLight';
import { ThemeNames } from '@/types';
import { Theme } from '@mui/material';

const themes: Record<ThemeNames, Theme> = {
	dark,
	light,
	muiLight,
};

export default themes;
