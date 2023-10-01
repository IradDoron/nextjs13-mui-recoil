'use client';

import { RecoilRoot } from 'recoil';

type Props = {
	children: React.ReactNode;
};
const ContextWrapper = ({ children }: Props) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};

export default ContextWrapper;
