import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import * as Plot from '@observablehq/plot';
import {format, parse, parseISO} from 'date-fns';
export const data = [
	{date: '2024-01-29T00:00:00', value: 47},
	{date: '2024-01-29T01:00:00', value: 52},
	{date: '2024-01-29T02:00:00', value: 33},
	{date: '2024-01-29T03:00:00', value: 65},
	{date: '2024-01-29T04:00:00', value: 23},
	{date: '2024-01-29T05:00:00', value: 85},
	{date: '2024-01-29T06:00:00', value: 15},
	{date: '2024-01-29T07:00:00', value: 98},
	{date: '2024-01-29T08:00:00', value: 50},
	{date: '2024-01-29T09:00:00', value: 76},
	{date: '2024-01-29T10:00:00', value: 64},
	{date: '2024-01-29T11:00:00', value: 29},
	{date: '2024-01-29T12:00:00', value: 90},
	{date: '2024-01-29T13:00:00', value: 34},
	{date: '2024-01-29T14:00:00', value: 59},
	{date: '2024-01-29T15:00:00', value: 21},
	{date: '2024-01-29T16:00:00', value: 88},
	{date: '2024-01-29T17:00:00', value: 45},
	{date: '2024-01-29T18:00:00', value: 67},
	{date: '2024-01-29T19:00:00', value: 73},
	{date: '2024-01-29T20:00:00', value: 54},
	{date: '2024-01-29T21:00:00', value: 38},
	{date: '2024-01-29T22:00:00', value: 82},
	{date: '2024-01-29T23:00:00', value: 19},
];

const ChartComponent: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const barChart = Plot.plot({
			marks: [
				Plot.barY(data, {
					x: (d) => format(parseISO(d.date), "HH':'mm"),
					y: 'value',
					sort: 'ascending',
					fill: 'transparent',
				}),

				Plot.areaY(data, {
					x: (d) => format(parseISO(d.date), "HH':'mm"),
					y: 'value',
					fillOpacity: 0.3,
				}),
				Plot.lineY(data, {
					x: (d) => format(parseISO(d.date), "HH':'mm"),
					y: 'value',
				}),
				Plot.barY(data, {
					x: (d) => format(parseISO(d.date), "HH':'mm"),
					y: 'value',
					sort: 'ascending',
					fill: 'black',
					fillOpacity: 0.3,
				}),
				Plot.ruleY([0]),
			],
			y: {
				grid: true,
			},
			x: {
				type: 'band',
				tickRotate: -45,
				insetTop: 10,
				tickSpacing: 10,
			},

			marginLeft: 50,
			marginTop: 50,
			marginBottom: 50,
			width: 900,
			height: 500,
		});
		if (ref.current) {
			ref.current?.appendChild(barChart);
		}
		return () => barChart.remove();
	}, [data]);

	return <div ref={ref}></div>;
};

export const PlotlyChartComposition: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'white',
			}}
		>
			<ChartComponent />
		</AbsoluteFill>
	);
};
