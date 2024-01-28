import {useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion/no-react';
import type {TradingChartProps} from './types';
import {ChartComponent} from './Chart';

export type LogicalSelection = {
	from: number;
	to: number;
};

const SolarChartComposition: React.FC<TradingChartProps> = ({
	data,
	userSelection,
	theme,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, width, height} = useVideoConfig();

	if (data.length === 0) return <></>;

	const initialData = data.slice(
		userSelection.from < 0 ? 0 : userSelection.from,
		userSelection.to
	);

	const lowestValue =
		initialData.length > 0
			? initialData.reduce((min, {value}) => {
					return value < min ? value : min;
			  }, initialData[0].value)
			: 0;

	const highestValue =
		initialData.length > 0
			? initialData.reduce((max, {value}) => {
					return value > max ? value : max;
			  }, initialData[0].value)
			: 0;

	const dataMovement = interpolate(
		frame,
		[0, durationInFrames / 2],
		[2, data.length],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const currentData =
		initialData.length > 0
			? initialData.slice(0, dataMovement)
			: data.slice(0, dataMovement);

	return (
		<ChartComponent
			data={initialData}
			currentData={currentData}
			lowestValue={lowestValue}
			highestValue={highestValue}
			height={height}
			width={width}
			theme={theme}
		/>
	);
};

export {SolarChartComposition};
