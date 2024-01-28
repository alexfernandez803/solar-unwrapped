import React from 'react';

const fontFamily = 'CarterOne-Regular, GT Planar, Helvetica';
const fontSize = 50;

export const ConsumptionLevel: React.FC<{
	title: string;
	unit: string;
	value: number;
}> = ({title, unit, value}) => {
	return (
		<div
			style={{
				transform: 'translateY(-30px)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-end',
				fontFamily,
				fontSize,
			}}
		>
			<div
				style={{
					backgroundColor: '#0A83F2',
					fontSize: 20,
					display: 'inline-block',
					lineHeight: 1,
					padding: '12px 20px',
					color: 'white',
					transform: 'translateY(3px)',
				}}
			>
				{title}
			</div>
			<div style={{border: '3px solid #0A83F2', whiteSpace: 'pre', padding: 7}}>
				{value} {unit}
			</div>
		</div>
	);
};
