import React from 'react';
import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import {Highlight} from './Highlight';
import {JumpText} from './JumpText';

export const Intro: React.FC = () => {
	const {durationInFrames} = useVideoConfig();
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',

				fontSize: 120,
			}}
		>
			<Sequence durationInFrames={durationInFrames} layout="none">
				<JumpText text="This is" />
			</Sequence>
			<Sequence from={40} durationInFrames={durationInFrames} layout="none">
				<Highlight text="SOLAR" />
			</Sequence>
			<Sequence from={80} durationInFrames={durationInFrames} layout="none">
				<JumpText text="un-wrapped!" />
			</Sequence>
		</AbsoluteFill>
	);
};
