'use client';

import ContextWrapper from '@/shared/ContextWrapper';
import ThemeWrapper from '@/shared/ThemeWrapper';

type Props = {
	children: React.ReactNode;
};

const AppWrapper = ({ children }: Props) => {
	return (
		<div>
			<ContextWrapper>
				<ThemeWrapper>{children}</ThemeWrapper>
			</ContextWrapper>
		</div>
	);
};

export default AppWrapper;
