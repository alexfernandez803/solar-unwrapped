import {AbsoluteFill} from 'remotion';
import {createChart, ColorType, CrosshairMode} from 'lightweight-charts';
import React, {useEffect, useRef} from 'react';
import type {ChartProps, DataPoint} from './types';

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
export const ChartComponent: React.FC<ChartProps> = ({
	data,
	height = 484,
	width = 840,
	theme = {
		backgroundColor: '#18181b',
		lineColor: '#00f8b2',
		textColor: 'white',
		areaTopColor: '#00f8b2',
		areaBottomColor: '#00f8b220',
		fontFamily: 'sans-serif',
		fontSize: 14,
	},
	lowestValue,
	highestValue,
	currentData,
}) => {
	const chartContainerRef = useRef<HTMLDivElement | null>(null);

	// Const toolTipContent = getData(currentData, token);

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
				color: theme.vertLineColor,
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
				background: {type: ColorType.Solid, color: theme.backgroundColor},
				textColor: theme.textColor,
				fontFamily: theme.fontFamily,
				fontSize: theme.fontSize,
			},

			timeScale: {
				uniformDistribution: true,
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
			lineColor: theme.lineColor,
			topColor: theme.areaTopColor,
			bottomColor: theme.areaBottomColor,
			lineWidth: 3,
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

		const histogramSeries = chart.addHistogramSeries({color: '#26a69a'});

		const data2 = [
			{value: 1, time: 1642425322},
			{value: 8, time: 1642511722},
			{value: 10, time: 1642598122},
			{value: 20, time: 1642684522},
			{value: 3, time: 1642770922, color: 'red'},
			{value: 43, time: 1642857322},
			{value: 41, time: 1642943722, color: 'red'},
			{value: 43, time: 1643030122},
			{value: 56, time: 1643116522},
			{value: 46, time: 1643202922, color: 'red'},
		];

		histogramSeries.setData(data2);

		const lineSeries = chart.addLineSeries({color: '#2962FF'});

		const data3 = [
			{value: 0, time: 1642425322},
			{value: 8, time: 1642511722},
			{value: 10, time: 1642598122},
			{value: 20, time: 1642684522},
			{value: 3, time: 1642770922},
			{value: 43, time: 1642857322},
			{value: 41, time: 1642943722},
			{value: 43, time: 1643030122},
			{value: 56, time: 1643116522},
			{value: 46, time: 1643202922},
		];

		lineSeries.setData(data3);

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};
	}, [data, lowestValue, highestValue]);

	return <AbsoluteFill ref={chartContainerRef} />;
};
