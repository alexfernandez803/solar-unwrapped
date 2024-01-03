import {interpolate} from 'remotion';
import {spring} from 'remotion';
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {measureText} from '@remotion/layout-utils';

const fontFamily = 'CarterOne-Regular';
const fontSize = 120;

export const Highlight: React.FC<{
	text: string;
}> = ({text}) => {
	const {width} = measureText({
		text,
		fontFamily,
		fontSize,
	});

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scaleEntrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 10,
	});
	const hightStart = spring({
		fps,
		frame: frame - 20,
		config: {
			damping: 200,
		},
		durationInFrames: 10,
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
				scale: `${interpolate(scaleEntrance, [0, 1], [0, 1], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				})}`,
				boxShadow: `inset ${interpolate(hightStart, [0, 1], [0, width], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				})}px  0 0 #F48037`,
				//	Transform: `translateY(${tY}px)`,
			}}
		>
			{text}
		</div>
	);
};
