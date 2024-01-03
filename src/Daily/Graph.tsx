import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {
	interpolate,
	interpolateColors,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import moment from 'moment';
import {darken} from 'polished';
// Set the dimensions and margins of the graph

export const Graph: React.FC<{
	style?: React.CSSProperties;
	delay?: number;
	weekValues: DateValue[];
}> = ({style, delay = 10, weekValues}) => {
	const {width} = useVideoConfig();

	const margin =
		width <= 360
			? {top: 30, right: 20, bottom: 70, left: 140}
			: {top: 30, right: 30, bottom: 70, left: 60};

	const chartWidth = width <= 360 ? 250 : 450 + (-margin.left - margin.right);
	const chartHeight = 400 - margin.top - margin.bottom;
	const max = Math.max(...weekValues.map((d) => Number(d.value)));

	const x = d3
		.scaleBand()
		.range([0, chartWidth])
		.domain(
			weekValues.map((d) => {
				return moment(d.dateTime).format('dddd');
			})
		)
		.padding(0.2);

	const maxNumbers = weekValues.map((d) => Number(d.value)) as number[];
	const y = d3
		.scaleLinear()
		.domain([0, Math.max(maxNumbers.reduce((a, b) => Math.max(a, b))) + 300])
		.range([chartHeight, 0]);
	const {fps} = useVideoConfig();

	const frame = useCurrentFrame();
	const svgRef = useRef<SVGSVGElement>(null);

	const animationYBar = spring({
		fps,
		frame: frame - delay,
		durationInFrames: 15,
		config: {
			stiffness: 200,
		},
	});

	const animationColor = spring({
		fps,
		frame: frame - delay - 5,
		durationInFrames: 15,
		config: {
			stiffness: 200,
		},
	});

	const color = interpolateColors(
		animationColor,
		[0, 1],
		['red', darken(0.1, '#A020F0')]
	);

	const strokeWidth = interpolate(animationColor, [0, 1], [1, 3]);

	useEffect(() => {
		if (!svgRef.current) return;
		svgRef.current.innerHTML = '';
		const svg = d3
			.select(svgRef.current)
			.attr('width', chartWidth + margin.left + margin.right)
			.attr('height', chartHeight + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
		const defs = svg.append('defs');

		defs
			.append('pattern')
			.attr('id', 'diagonalHatch')
			.attr('patternUnits', 'userSpaceOnUse')
			.attr('width', 4)
			.attr('height', 4)
			.append('path')
			.attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
			.attr('stroke', 'red')
			.attr('stroke-width', 1);

		svg
			.append('g')
			.attr('transform', 'translate(0,' + chartHeight + ')')
			.call(d3.axisBottom(x))
			.selectAll('text')

			.attr('font-family', 'Variable')
			.attr('fontVariationSettings', '"wght" 900')
			.attr('transform', 'translate(-10,0)rotate(-45)')
			.style('text-anchor', 'end');
		svg.append('g').call(d3.axisLeft(y));
		svg
			.selectAll('bar')
			.data(weekValues)
			.enter()
			.append('rect')
			.attr('x', (d) => {
				return (
					x(moment(d.dateTime).format('dddd')) ?? 0 + (width <= 360 ? 10 : 0)
				);
			})
			.attr('font-family', 'Variable')
			.attr('fontVariationSettings', '"wght" 700')
			.attr('width', width <= 360 ? 30 : x.bandwidth())
			.attr('stroke', (d) => (Number(d.value) === max ? color : 'red'))
			.attr('stroke-width', (d) => (Number(d.value) === max ? strokeWidth : 1))
			.style('fill', 'url(#diagonalHatch)')
			.attr('y', (d) => {
				return interpolate(animationYBar, [0, 1], [y(0), y(d.value)]);
			})
			.attr('height', (d) => {
				return interpolate(
					animationYBar,
					[0, 1],
					[chartHeight - y(0), chartHeight - y(d.value)]
				);
			});

		svg.node();
	}, [animationYBar, weekValues, x, y]);
	return (
		<div
			style={{
				backgroundColor: 'white',
				width: 500,
				height: 400,
				...style,
			}}
		>
			<svg ref={svgRef} />
		</div>
	);
};
