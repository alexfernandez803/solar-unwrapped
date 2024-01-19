import {AbsoluteFill} from 'remotion';
import {createChart, ColorType, CrosshairMode} from 'lightweight-charts';
import React, {useEffect, useRef} from 'react';
import type {DataPoint} from './types';

export type Colors = {
	backgroundColor: string;
	lineColor: string;
	textColor: string;
	areaTopColor: string;
	areaBottomColor: string;
};

const getData = (data: DataPoint[], token: string) => {
	if (data.length === 0) return '';
	const lastData = data[data.length - 1];
	const dateStr = new Date(parseInt(lastData.time, 10) * 1000).toLocaleString();

	return `<div style="font-size: 24px; margin: 4px 0px; color: white">${token}</div>
    <div style="font-size: 22px; margin: 4px 0px; color:white">${lastData.value.toFixed(
			4
		)}</div>
    <div>${dateStr}</div>`;
};
export const ChartComponent: React.FC<{
	data: DataPoint[];
	currentData: DataPoint[];
	colors?: Colors;
	lowestValue: number;
	highestValue: number;
	height?: number;
	width?: number;
	fontSize?: number;
	token: string;
}> = ({
	data,
	height = 484,
	width = 840,
	colors = {
		backgroundColor: '#18181b',
		lineColor: '#00f8b2',
		textColor: 'white',
		areaTopColor: '#00f8b2',
		areaBottomColor: '#00f8b220',
	},
	lowestValue,
	highestValue,
	currentData,
	fontSize = 14,
	token,
}) => {
	const chartContainerRef = useRef<HTMLDivElement | null>(null);

	const toolTipContent = getData(currentData, token);

	const interactiveOptions = {
		handleScroll: {
			mouseWheel: false,
			pressedMouseMove: false,
			horzTouchDrag: false,
			vertTouchDrag: false,
		},
		handleScale: {
			axisPressedMouseMove: false,
			mouseWheel: false,
			pinch: false,
			axisDoubleClickReset: false,
			time: false,
			price: false,
		},
		crosshair: {
			mode: CrosshairMode.Hidden,
			horzLine: {
				visible: false,
				labelVisible: false,
			},
			vertLine: {
				visible: false,
				style: 0,

				color: 'rgba(32, 38, 46, 0.1)',
				labelVisible: false,
			},
		},
	};

	useEffect(() => {
		if (!chartContainerRef.current) return;
		const handleResize = () => {
			if (!chartContainerRef.current) return;
			chart.applyOptions({width: chartContainerRef.current.clientWidth});
		};

		const chart = createChart(chartContainerRef.current, {
			...interactiveOptions,
			layout: {
				background: {type: ColorType.Solid, color: colors.backgroundColor},
				textColor: colors.textColor,
				fontFamily: 'sans-serif',
				fontSize,
			},

			timeScale: {
				uniformDistribution: true,
				// TickMarkFormatter: (time) => {
				//   const date = new Date(time).toLocaleDateString();
				//   return date;
				// }
			},
			grid: {
				vertLines: {
					visible: false,
					color: '#2B2B43',
				},
				horzLines: {
					color: '#363C4E',
				},
			},
			width,
			height,
		});

		const newSeries = chart.addAreaSeries({
			lineColor: colors.lineColor,
			topColor: colors.areaTopColor,
			bottomColor: colors.areaBottomColor,
			priceLineVisible: false,
			autoscaleInfoProvider: (original) => {
				const res = original();
				res.priceRange.minValue = lowestValue;
				res.priceRange.maxValue = highestValue;
				return res;
			},
		});
		newSeries.setData(currentData);

		chart.timeScale().setVisibleLogicalRange({from: 0, to: data.length - 1});

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};
	}, [data, lowestValue, highestValue]);

	return (
		<AbsoluteFill ref={chartContainerRef}>
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{__html: toolTipContent}}
				style={{
					width: 'auto',
					height: '70px',
					position: 'absolute',
					padding: '8px',
					fontSize: '12px',
					color: 'white',
					textAlign: 'left',
					zIndex: 1000,
					pointerEvents: 'none',
				}}
			/>
		</AbsoluteFill>
	);
};
