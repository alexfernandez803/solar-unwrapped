const cleanPercentage = (percentage: number) => {
	const isNegativeOrNaN =
		!Number.isFinite(Number(percentage)) || percentage < 0; // We can set non-numbers to 0 here
	const isTooHigh = percentage > 100;
	return isNegativeOrNaN ? 0 : isTooHigh ? 100 : Number(percentage);
};

const Circle = ({
	colour,
	percentage = 0,
}: {
	colour: string;
	percentage?: number;
}) => {
	const r = 70;
	const circ = 2 * Math.PI * r;
	const strokePct = ((100 - percentage) * circ) / 100; // Where stroke will start, e.g. from 15% to 100%.
	return (
		<circle
			r={r}
			cx={100}
			cy={100}
			fill="transparent"
			stroke={strokePct === circ ? '' : colour} // Remove colour as 0% sets full circumference
			strokeWidth="2rem"
			strokeDasharray={circ}
			strokeDashoffset={percentage ? strokePct : 0}
		/>
	);
};

const Text = ({percentage}: {percentage: number}) => {
	return (
		<text
			x="50%"
			y="50%"
			dominantBaseline="central"
			textAnchor="middle"
			fontSize="1.5em"
		>
			{percentage.toFixed(0)}%
		</text>
	);
};

export const Pie = ({
	percentage,
	colour,
}: {
	percentage: number;
	colour: string;
}) => {
	const pct = cleanPercentage(percentage);
	return (
		<svg width={200} height={200}>
			<g transform={`rotate(-90 ${'100 100'})`}>
				<Circle colour="lightgrey" />
				<Circle colour={colour} percentage={pct} />
			</g>
			<Text percentage={pct} />
		</svg>
	);
};
