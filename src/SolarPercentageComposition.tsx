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
					//border: '4px solid rgb(10, 131, 242)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: 30,
				}}
				className="flex flex-col space-4"
			>
				<Pie percentage={change} colour="rgb(10, 131, 242)" />
				<ConsumptionLevel unit="kWH" value={2.81} title="In-House" />
				<ConsumptionLevel unit="kWH" value={4.43} title="Buy" />
				<ConsumptionLevel unit="kWH" value={25.69} title="Sell" />
				<ConsumptionLevel unit="kWH" value={7.24} title="Load Consumption" />
			</div>
		</AbsoluteFill>
	);
};
