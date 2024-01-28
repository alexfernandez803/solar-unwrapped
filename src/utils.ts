import {da, faker} from '@faker-js/faker';
import {DataPoint} from './types';

export function formatDate(date: Date): string {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
}

function getMonday(date: Date): Date {
	const day = date.getDay();
	const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
	return new Date(date.setDate(diff));
}

export function generateDataPointData(
	period: 'weekly' | 'monthly' | 'yearly'
): DataPoint[] {
	const data: DataPoint[] = [];
	let currentDate = new Date();

	if (period === 'weekly') {
		currentDate = getMonday(currentDate);
		for (let i = 0; i < 7; i++) {
			data.push({
				time: formatDate(new Date(currentDate)),
				value: faker.datatype.number({min: 0, max: 50}),
			});
			currentDate.setDate(currentDate.getDate() + 1);
		}
	} else if (period === 'monthly') {
		currentDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			1
		);
		while (currentDate.getMonth() === new Date().getMonth()) {
			data.push({
				time: formatDate(new Date(currentDate)),
				value: faker.number.int({min: 0, max: 50}),
			});
			currentDate.setDate(currentDate.getDate() + 1);
		}
	} else if (period === 'yearly') {
		currentDate = new Date(currentDate.getFullYear(), 0, 1);
		while (currentDate.getFullYear() === new Date().getFullYear()) {
			data.push({
				time: formatDate(new Date(currentDate)),
				value: faker.number.int({min: 0, max: 50}),
			});
			currentDate.setDate(currentDate.getDate() + 1);
		}
	}

	console.log('data', data);
	return data;
}

export type Dimensions = {
	width: number;
	height: number;
};
export const verticalDimensions: Dimensions = {
	width: 1080,
	height: 1920,
};

export const horizontalDimensions: Dimensions = {
	width: 1920,
	height: 1080,
};

export const squareDimensions: Dimensions = {
	width: 1080,
	height: 1080,
};
