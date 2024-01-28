import {interpolate, spring} from 'remotion';
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {Pie} from './components/Circle';
import {useFont} from './hooks/use-font';
import {ConsumptionLevel} from './components/ConsumptionLevel';

const fontFamily = 'CarterOne-Regular';

export const SolarPercentageComposition: React.FC = () => {
	const frame = useCurrentFrame();

	useFont(fontFamily);

	const animationSpring = spring({
		frame,
		fps: 30,
		config: {
			damping: 200,
		},
	});
	const change = interpolate(animationSpring, [0, 1], [0, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily,
			}}
		>
			<div
				style={{
					border: '4px solid rgb(10, 131, 242)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: 30,
				}}
			>
				<Pie percentage={change} colour="rgb(10, 131, 242)" />
				<ConsumptionLevel title="2.81 kWH" subtitle="In-House" />
				<ConsumptionLevel title="4.43 kWH" subtitle="Buy" />
				<ConsumptionLevel title="25.69 kWH" subtitle="Sell" />
				<ConsumptionLevel title="7.24 kWH" subtitle="Load Consumption" />
			</div>
		</AbsoluteFill>
	);
};
