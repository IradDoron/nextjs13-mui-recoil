import { createCustomPalette } from '@/utils';

const light = createCustomPalette({
	mode: 'light',
	primary: {
		main: '#FF8C69',
		light: '#63a4ff',
		dark: '#004ba0',
		contrastText: '#fff',
	},
	secondary: {
		main: '#dc004e',
		light: '#ff5c8d',
		dark: '#9a0036',
		contrastText: '#fff',
	},
});

export default light;
