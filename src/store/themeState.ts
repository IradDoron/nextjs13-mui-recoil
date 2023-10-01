import { ThemeNames } from '@/types';
import { atom, RecoilState } from 'recoil';

export const themeNameState = atom({
	key: 'themeNameState',
	default: 'light',
}) as RecoilState<ThemeNames>;
