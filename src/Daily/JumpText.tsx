import {interpolate} from 'remotion';
import {spring} from 'remotion';
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';

export const JumpText: React.FC<{
	text: string;
}> = ({text}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const end = spring({
		fps,
		frame: frame - 30,
		config: {
			damping: 200,
		},
	});

	const tY = interpolate(end, [0, 1], [50, 50], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				scale: `${interpolate(entrance, [0, 1], [0, 1], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				})}`,
				// Transform: `translateY(${tY}px)`,
			}}
		>
			{text}
		</div>
	);
};
