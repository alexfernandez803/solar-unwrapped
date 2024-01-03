import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {useFont} from '../hooks/use-font';
import {Intro} from './Intro';

const fontFamily = 'CarterOne-Regular';

export const DailyComposition: React.FC = () => {
	useFont('CarterOne-Regular');
	return (
		<AbsoluteFill
			style={{
				fontFamily,
				background: `#FFFFE0`,
			}}
		>
			<Sequence durationInFrames={120} layout="none">
				<Intro />
			</Sequence>
		</AbsoluteFill>
	);
};
