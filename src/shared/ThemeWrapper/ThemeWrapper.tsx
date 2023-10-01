'use client';

import { themeNameState } from '@/store/themeState';
import themes from '@/themes';
import { ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

type Props = {
	children: React.ReactNode;
};

const ThemeWrapper = ({ children }: Props) => {
	const themeName = useRecoilValue(themeNameState);

	const theme = useMemo(() => themes[themeName], [themeName]);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
