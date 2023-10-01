'use client';

import { THEMES_NAMES } from '@/constants';
import { themeNameState } from '@/store/themeState';
import { ThemeNames } from '@/types';
import { Box, Button, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';

const ThemeSwitcher = () => {
	const [themeName, setThemeName] = useRecoilState(themeNameState);

	const handleThemeChange = (themeName: ThemeNames) => {
		setThemeName(themeName);
	};

	return (
		<Box>
			{THEMES_NAMES.map((themeName) => (
				<Button
					variant='contained'
					key={themeName}
					onClick={() => handleThemeChange(themeName)}
				>
					{themeName}
				</Button>
			))}
			<Typography variant='h1'>{themeName}</Typography>
		</Box>
	);
};

export default ThemeSwitcher;
