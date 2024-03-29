import {Composition} from 'remotion';
import {SolarChartComposition} from './SolarChartComposition';
import {SolarPercentageComposition} from './SolarPercentageComposition';
import {tradingChartSchema} from './types';
import {squareDimensions} from './utils';
import './styles.css';
import {PlotlyChartComposition} from './PlotlyChartComposition';
export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="solar-percentage"
				component={SolarPercentageComposition}
				durationInFrames={1260 / 4}
				fps={30}
				width={squareDimensions.width}
				height={squareDimensions.height}
			/>

			<Composition
				id="solar-chart"
				component={PlotlyChartComposition}
				durationInFrames={1260 / 4}
				fps={30}
				width={squareDimensions.width}
				height={squareDimensions.height}
			/>
			<Composition
				id="main"
				component={SolarChartComposition}
				durationInFrames={1260 / 4}
				fps={30}
				width={squareDimensions.width}
				height={squareDimensions.height}
				schema={tradingChartSchema}
				defaultProps={{
					theme: {
						backgroundColor: '#18181b',
						lineColor: '#d8e51f',
						textColor: 'white',
						areaTopColor: '#bbc856',
						areaBottomColor: 'rgba(250, 171, 0, 0.13)',
						fontFamily: 'sans-serif',
						fontSize: 14,
					},
					userSelection: {
						from: 0,
						to: 100,
					},
					data: [
						{
							time: '2024-01-01',
							value: 43,
						},
						{
							time: '2024-01-02',
							value: 42,
						},
						{
							time: '2024-01-03',
							value: 49,
						},
						{
							time: '2024-01-04',
							value: 48,
						},
						{
							time: '2024-01-05',
							value: 22,
						},
						{
							time: '2024-01-06',
							value: 6,
						},
						{
							time: '2024-01-07',
							value: 48,
						},
						{
							time: '2024-01-08',
							value: 12,
						},
						{
							time: '2024-01-09',
							value: 13,
						},
						{
							time: '2024-01-10',
							value: 50,
						},
						{
							time: '2024-01-11',
							value: 15,
						},
						{
							time: '2024-01-12',
							value: 29,
						},
						{
							time: '2024-01-13',
							value: 19,
						},
						{
							time: '2024-01-14',
							value: 7,
						},
						{
							time: '2024-01-15',
							value: 45,
						},
						{
							time: '2024-01-16',
							value: 28,
						},
						{
							time: '2024-01-17',
							value: 14,
						},
						{
							time: '2024-01-18',
							value: 34,
						},
						{
							time: '2024-01-19',
							value: 22,
						},
						{
							time: '2024-01-20',
							value: 31,
						},
						{
							time: '2024-01-21',
							value: 17,
						},
						{
							time: '2024-01-22',
							value: 9,
						},
						{
							time: '2024-01-23',
							value: 36,
						},
						{
							time: '2024-01-24',
							value: 10,
						},
						{
							time: '2024-01-25',
							value: 23,
						},
						{
							time: '2024-01-26',
							value: 16,
						},
						{
							time: '2024-01-27',
							value: 5,
						},
						{
							time: '2024-01-28',
							value: 20,
						},
						{
							time: '2024-01-29',
							value: 20,
						},
						{
							time: '2024-01-30',
							value: 29,
						},
						{
							time: '2024-01-31',
							value: 22,
						},
						{
							time: '2024-02-01',
							value: 39,
						},
						{
							time: '2024-02-02',
							value: 39,
						},
						{
							time: '2024-02-03',
							value: 15,
						},
						{
							time: '2024-02-04',
							value: 5,
						},
						{
							time: '2024-02-05',
							value: 8,
						},
						{
							time: '2024-02-06',
							value: 38,
						},
						{
							time: '2024-02-07',
							value: 23,
						},
						{
							time: '2024-02-08',
							value: 40,
						},
						{
							time: '2024-02-09',
							value: 8,
						},
						{
							time: '2024-02-10',
							value: 23,
						},
						{
							time: '2024-02-11',
							value: 47,
						},
						{
							time: '2024-02-12',
							value: 35,
						},
						{
							time: '2024-02-13',
							value: 28,
						},
						{
							time: '2024-02-14',
							value: 29,
						},
						{
							time: '2024-02-15',
							value: 15,
						},
						{
							time: '2024-02-16',
							value: 2,
						},
						{
							time: '2024-02-17',
							value: 37,
						},
						{
							time: '2024-02-18',
							value: 23,
						},
						{
							time: '2024-02-19',
							value: 14,
						},
						{
							time: '2024-02-20',
							value: 6,
						},
						{
							time: '2024-02-21',
							value: 41,
						},
						{
							time: '2024-02-22',
							value: 18,
						},
						{
							time: '2024-02-23',
							value: 27,
						},
						{
							time: '2024-02-24',
							value: 32,
						},
						{
							time: '2024-02-25',
							value: 44,
						},
						{
							time: '2024-02-26',
							value: 38,
						},
						{
							time: '2024-02-27',
							value: 3,
						},
						{
							time: '2024-02-28',
							value: 5,
						},
						{
							time: '2024-02-29',
							value: 34,
						},
						{
							time: '2024-03-01',
							value: 11,
						},
						{
							time: '2024-03-02',
							value: 22,
						},
						{
							time: '2024-03-03',
							value: 50,
						},
						{
							time: '2024-03-04',
							value: 15,
						},
						{
							time: '2024-03-05',
							value: 5,
						},
						{
							time: '2024-03-06',
							value: 27,
						},
						{
							time: '2024-03-07',
							value: 44,
						},
						{
							time: '2024-03-08',
							value: 21,
						},
						{
							time: '2024-03-09',
							value: 29,
						},
						{
							time: '2024-03-10',
							value: 28,
						},
						{
							time: '2024-03-11',
							value: 22,
						},
						{
							time: '2024-03-12',
							value: 37,
						},
						{
							time: '2024-03-13',
							value: 42,
						},
						{
							time: '2024-03-14',
							value: 46,
						},
						{
							time: '2024-03-15',
							value: 19,
						},
						{
							time: '2024-03-16',
							value: 7,
						},
						{
							time: '2024-03-17',
							value: 3,
						},
						{
							time: '2024-03-18',
							value: 28,
						},
						{
							time: '2024-03-19',
							value: 45,
						},
						{
							time: '2024-03-20',
							value: 46,
						},
						{
							time: '2024-03-21',
							value: 50,
						},
						{
							time: '2024-03-22',
							value: 28,
						},
						{
							time: '2024-03-23',
							value: 31,
						},
						{
							time: '2024-03-24',
							value: 34,
						},
						{
							time: '2024-03-25',
							value: 16,
						},
						{
							time: '2024-03-26',
							value: 10,
						},
						{
							time: '2024-03-27',
							value: 36,
						},
						{
							time: '2024-03-28',
							value: 0,
						},
						{
							time: '2024-03-29',
							value: 13,
						},
						{
							time: '2024-03-30',
							value: 28,
						},
						{
							time: '2024-03-31',
							value: 31,
						},
						{
							time: '2024-04-01',
							value: 24,
						},
						{
							time: '2024-04-02',
							value: 0,
						},
						{
							time: '2024-04-03',
							value: 34,
						},
						{
							time: '2024-04-04',
							value: 29,
						},
						{
							time: '2024-04-05',
							value: 44,
						},
						{
							time: '2024-04-06',
							value: 1,
						},
						{
							time: '2024-04-07',
							value: 27,
						},
						{
							time: '2024-04-08',
							value: 35,
						},
						{
							time: '2024-04-09',
							value: 4,
						},
						{
							time: '2024-04-10',
							value: 16,
						},
						{
							time: '2024-04-11',
							value: 0,
						},
						{
							time: '2024-04-12',
							value: 18,
						},
						{
							time: '2024-04-13',
							value: 44,
						},
						{
							time: '2024-04-14',
							value: 35,
						},
						{
							time: '2024-04-15',
							value: 33,
						},
						{
							time: '2024-04-16',
							value: 32,
						},
						{
							time: '2024-04-17',
							value: 29,
						},
						{
							time: '2024-04-18',
							value: 4,
						},
						{
							time: '2024-04-19',
							value: 8,
						},
						{
							time: '2024-04-20',
							value: 33,
						},
						{
							time: '2024-04-21',
							value: 31,
						},
						{
							time: '2024-04-22',
							value: 43,
						},
						{
							time: '2024-04-23',
							value: 16,
						},
						{
							time: '2024-04-24',
							value: 37,
						},
						{
							time: '2024-04-25',
							value: 38,
						},
						{
							time: '2024-04-26',
							value: 32,
						},
						{
							time: '2024-04-27',
							value: 40,
						},
						{
							time: '2024-04-28',
							value: 15,
						},
						{
							time: '2024-04-29',
							value: 39,
						},
						{
							time: '2024-04-30',
							value: 37,
						},
						{
							time: '2024-05-01',
							value: 24,
						},
						{
							time: '2024-05-02',
							value: 38,
						},
						{
							time: '2024-05-03',
							value: 0,
						},
						{
							time: '2024-05-04',
							value: 50,
						},
						{
							time: '2024-05-05',
							value: 30,
						},
						{
							time: '2024-05-06',
							value: 10,
						},
						{
							time: '2024-05-07',
							value: 47,
						},
						{
							time: '2024-05-08',
							value: 35,
						},
						{
							time: '2024-05-09',
							value: 35,
						},
						{
							time: '2024-05-10',
							value: 5,
						},
						{
							time: '2024-05-11',
							value: 10,
						},
						{
							time: '2024-05-12',
							value: 18,
						},
						{
							time: '2024-05-13',
							value: 43,
						},
						{
							time: '2024-05-14',
							value: 43,
						},
						{
							time: '2024-05-15',
							value: 15,
						},
						{
							time: '2024-05-16',
							value: 49,
						},
						{
							time: '2024-05-17',
							value: 12,
						},
						{
							time: '2024-05-18',
							value: 48,
						},
						{
							time: '2024-05-19',
							value: 47,
						},
						{
							time: '2024-05-20',
							value: 9,
						},
						{
							time: '2024-05-21',
							value: 29,
						},
						{
							time: '2024-05-22',
							value: 11,
						},
						{
							time: '2024-05-23',
							value: 24,
						},
						{
							time: '2024-05-24',
							value: 20,
						},
						{
							time: '2024-05-25',
							value: 31,
						},
						{
							time: '2024-05-26',
							value: 30,
						},
						{
							time: '2024-05-27',
							value: 44,
						},
						{
							time: '2024-05-28',
							value: 14,
						},
						{
							time: '2024-05-29',
							value: 7,
						},
						{
							time: '2024-05-30',
							value: 32,
						},
						{
							time: '2024-05-31',
							value: 11,
						},
						{
							time: '2024-06-01',
							value: 50,
						},
						{
							time: '2024-06-02',
							value: 15,
						},
						{
							time: '2024-06-03',
							value: 1,
						},
						{
							time: '2024-06-04',
							value: 47,
						},
						{
							time: '2024-06-05',
							value: 25,
						},
						{
							time: '2024-06-06',
							value: 49,
						},
						{
							time: '2024-06-07',
							value: 14,
						},
						{
							time: '2024-06-08',
							value: 30,
						},
						{
							time: '2024-06-09',
							value: 3,
						},
						{
							time: '2024-06-10',
							value: 5,
						},
						{
							time: '2024-06-11',
							value: 31,
						},
						{
							time: '2024-06-12',
							value: 17,
						},
						{
							time: '2024-06-13',
							value: 13,
						},
						{
							time: '2024-06-14',
							value: 2,
						},
						{
							time: '2024-06-15',
							value: 12,
						},
						{
							time: '2024-06-16',
							value: 21,
						},
						{
							time: '2024-06-17',
							value: 48,
						},
						{
							time: '2024-06-18',
							value: 16,
						},
						{
							time: '2024-06-19',
							value: 22,
						},
						{
							time: '2024-06-20',
							value: 43,
						},
						{
							time: '2024-06-21',
							value: 23,
						},
						{
							time: '2024-06-22',
							value: 28,
						},
						{
							time: '2024-06-23',
							value: 48,
						},
						{
							time: '2024-06-24',
							value: 44,
						},
						{
							time: '2024-06-25',
							value: 5,
						},
						{
							time: '2024-06-26',
							value: 34,
						},
						{
							time: '2024-06-27',
							value: 28,
						},
						{
							time: '2024-06-28',
							value: 32,
						},
						{
							time: '2024-06-29',
							value: 27,
						},
						{
							time: '2024-06-30',
							value: 50,
						},
						{
							time: '2024-07-01',
							value: 43,
						},
						{
							time: '2024-07-02',
							value: 38,
						},
						{
							time: '2024-07-03',
							value: 16,
						},
						{
							time: '2024-07-04',
							value: 23,
						},
						{
							time: '2024-07-05',
							value: 29,
						},
						{
							time: '2024-07-06',
							value: 3,
						},
						{
							time: '2024-07-07',
							value: 47,
						},
						{
							time: '2024-07-08',
							value: 1,
						},
						{
							time: '2024-07-09',
							value: 50,
						},
						{
							time: '2024-07-10',
							value: 28,
						},
						{
							time: '2024-07-11',
							value: 39,
						},
						{
							time: '2024-07-12',
							value: 42,
						},
						{
							time: '2024-07-13',
							value: 12,
						},
						{
							time: '2024-07-14',
							value: 2,
						},
						{
							time: '2024-07-15',
							value: 27,
						},
						{
							time: '2024-07-16',
							value: 46,
						},
						{
							time: '2024-07-17',
							value: 20,
						},
						{
							time: '2024-07-18',
							value: 28,
						},
						{
							time: '2024-07-19',
							value: 25,
						},
						{
							time: '2024-07-20',
							value: 27,
						},
						{
							time: '2024-07-21',
							value: 18,
						},
						{
							time: '2024-07-22',
							value: 30,
						},
						{
							time: '2024-07-23',
							value: 22,
						},
						{
							time: '2024-07-24',
							value: 1,
						},
						{
							time: '2024-07-25',
							value: 8,
						},
						{
							time: '2024-07-26',
							value: 50,
						},
						{
							time: '2024-07-27',
							value: 2,
						},
						{
							time: '2024-07-28',
							value: 1,
						},
						{
							time: '2024-07-29',
							value: 37,
						},
						{
							time: '2024-07-30',
							value: 17,
						},
						{
							time: '2024-07-31',
							value: 25,
						},
						{
							time: '2024-08-01',
							value: 10,
						},
						{
							time: '2024-08-02',
							value: 5,
						},
						{
							time: '2024-08-03',
							value: 28,
						},
						{
							time: '2024-08-04',
							value: 9,
						},
						{
							time: '2024-08-05',
							value: 15,
						},
						{
							time: '2024-08-06',
							value: 14,
						},
						{
							time: '2024-08-07',
							value: 18,
						},
						{
							time: '2024-08-08',
							value: 50,
						},
						{
							time: '2024-08-09',
							value: 22,
						},
						{
							time: '2024-08-10',
							value: 9,
						},
						{
							time: '2024-08-11',
							value: 40,
						},
						{
							time: '2024-08-12',
							value: 43,
						},
						{
							time: '2024-08-13',
							value: 9,
						},
						{
							time: '2024-08-14',
							value: 13,
						},
						{
							time: '2024-08-15',
							value: 45,
						},
						{
							time: '2024-08-16',
							value: 39,
						},
						{
							time: '2024-08-17',
							value: 34,
						},
						{
							time: '2024-08-18',
							value: 11,
						},
						{
							time: '2024-08-19',
							value: 4,
						},
						{
							time: '2024-08-20',
							value: 46,
						},
						{
							time: '2024-08-21',
							value: 31,
						},
						{
							time: '2024-08-22',
							value: 24,
						},
						{
							time: '2024-08-23',
							value: 14,
						},
						{
							time: '2024-08-24',
							value: 33,
						},
						{
							time: '2024-08-25',
							value: 2,
						},
						{
							time: '2024-08-26',
							value: 43,
						},
						{
							time: '2024-08-27',
							value: 42,
						},
						{
							time: '2024-08-28',
							value: 9,
						},
						{
							time: '2024-08-29',
							value: 37,
						},
						{
							time: '2024-08-30',
							value: 30,
						},
						{
							time: '2024-08-31',
							value: 21,
						},
						{
							time: '2024-09-01',
							value: 23,
						},
						{
							time: '2024-09-02',
							value: 5,
						},
						{
							time: '2024-09-03',
							value: 27,
						},
						{
							time: '2024-09-04',
							value: 30,
						},
						{
							time: '2024-09-05',
							value: 9,
						},
						{
							time: '2024-09-06',
							value: 46,
						},
						{
							time: '2024-09-07',
							value: 27,
						},
						{
							time: '2024-09-08',
							value: 28,
						},
						{
							time: '2024-09-09',
							value: 31,
						},
						{
							time: '2024-09-10',
							value: 2,
						},
						{
							time: '2024-09-11',
							value: 7,
						},
						{
							time: '2024-09-12',
							value: 41,
						},
						{
							time: '2024-09-13',
							value: 19,
						},
						{
							time: '2024-09-14',
							value: 34,
						},
						{
							time: '2024-09-15',
							value: 4,
						},
						{
							time: '2024-09-16',
							value: 2,
						},
						{
							time: '2024-09-17',
							value: 40,
						},
						{
							time: '2024-09-18',
							value: 17,
						},
						{
							time: '2024-09-19',
							value: 7,
						},
						{
							time: '2024-09-20',
							value: 32,
						},
						{
							time: '2024-09-21',
							value: 35,
						},
						{
							time: '2024-09-22',
							value: 3,
						},
						{
							time: '2024-09-23',
							value: 20,
						},
						{
							time: '2024-09-24',
							value: 9,
						},
						{
							time: '2024-09-25',
							value: 3,
						},
						{
							time: '2024-09-26',
							value: 27,
						},
						{
							time: '2024-09-27',
							value: 4,
						},
						{
							time: '2024-09-28',
							value: 12,
						},
						{
							time: '2024-09-29',
							value: 3,
						},
						{
							time: '2024-09-30',
							value: 46,
						},
						{
							time: '2024-10-01',
							value: 3,
						},
						{
							time: '2024-10-02',
							value: 45,
						},
						{
							time: '2024-10-03',
							value: 30,
						},
						{
							time: '2024-10-04',
							value: 0,
						},
						{
							time: '2024-10-05',
							value: 13,
						},
						{
							time: '2024-10-06',
							value: 25,
						},
						{
							time: '2024-10-07',
							value: 3,
						},
						{
							time: '2024-10-08',
							value: 7,
						},
						{
							time: '2024-10-09',
							value: 41,
						},
						{
							time: '2024-10-10',
							value: 25,
						},
						{
							time: '2024-10-11',
							value: 37,
						},
						{
							time: '2024-10-12',
							value: 27,
						},
						{
							time: '2024-10-13',
							value: 1,
						},
						{
							time: '2024-10-14',
							value: 25,
						},
						{
							time: '2024-10-15',
							value: 22,
						},
						{
							time: '2024-10-16',
							value: 14,
						},
						{
							time: '2024-10-17',
							value: 50,
						},
						{
							time: '2024-10-18',
							value: 27,
						},
						{
							time: '2024-10-19',
							value: 46,
						},
						{
							time: '2024-10-20',
							value: 29,
						},
						{
							time: '2024-10-21',
							value: 5,
						},
						{
							time: '2024-10-22',
							value: 40,
						},
						{
							time: '2024-10-23',
							value: 0,
						},
						{
							time: '2024-10-24',
							value: 17,
						},
						{
							time: '2024-10-25',
							value: 33,
						},
						{
							time: '2024-10-26',
							value: 36,
						},
						{
							time: '2024-10-27',
							value: 9,
						},
						{
							time: '2024-10-28',
							value: 42,
						},
						{
							time: '2024-10-29',
							value: 1,
						},
						{
							time: '2024-10-30',
							value: 32,
						},
						{
							time: '2024-10-31',
							value: 15,
						},
						{
							time: '2024-11-01',
							value: 25,
						},
						{
							time: '2024-11-02',
							value: 8,
						},
						{
							time: '2024-11-03',
							value: 15,
						},
						{
							time: '2024-11-04',
							value: 14,
						},
						{
							time: '2024-11-05',
							value: 32,
						},
						{
							time: '2024-11-06',
							value: 35,
						},
						{
							time: '2024-11-07',
							value: 15,
						},
						{
							time: '2024-11-08',
							value: 14,
						},
						{
							time: '2024-11-09',
							value: 40,
						},
						{
							time: '2024-11-10',
							value: 18,
						},
						{
							time: '2024-11-11',
							value: 43,
						},
						{
							time: '2024-11-12',
							value: 28,
						},
						{
							time: '2024-11-13',
							value: 7,
						},
						{
							time: '2024-11-14',
							value: 2,
						},
						{
							time: '2024-11-15',
							value: 9,
						},
						{
							time: '2024-11-16',
							value: 23,
						},
						{
							time: '2024-11-17',
							value: 37,
						},
						{
							time: '2024-11-18',
							value: 25,
						},
						{
							time: '2024-11-19',
							value: 7,
						},
						{
							time: '2024-11-20',
							value: 4,
						},
						{
							time: '2024-11-21',
							value: 2,
						},
						{
							time: '2024-11-22',
							value: 46,
						},
						{
							time: '2024-11-23',
							value: 25,
						},
						{
							time: '2024-11-24',
							value: 18,
						},
						{
							time: '2024-11-25',
							value: 7,
						},
						{
							time: '2024-11-26',
							value: 27,
						},
						{
							time: '2024-11-27',
							value: 16,
						},
						{
							time: '2024-11-28',
							value: 41,
						},
						{
							time: '2024-11-29',
							value: 49,
						},
						{
							time: '2024-11-30',
							value: 4,
						},
						{
							time: '2024-12-01',
							value: 37,
						},
						{
							time: '2024-12-02',
							value: 35,
						},
						{
							time: '2024-12-03',
							value: 43,
						},
						{
							time: '2024-12-04',
							value: 46,
						},
						{
							time: '2024-12-05',
							value: 18,
						},
						{
							time: '2024-12-06',
							value: 39,
						},
						{
							time: '2024-12-07',
							value: 15,
						},
						{
							time: '2024-12-08',
							value: 49,
						},
						{
							time: '2024-12-09',
							value: 6,
						},
						{
							time: '2024-12-10',
							value: 20,
						},
						{
							time: '2024-12-11',
							value: 24,
						},
						{
							time: '2024-12-12',
							value: 2,
						},
						{
							time: '2024-12-13',
							value: 47,
						},
						{
							time: '2024-12-14',
							value: 1,
						},
						{
							time: '2024-12-15',
							value: 40,
						},
						{
							time: '2024-12-16',
							value: 37,
						},
						{
							time: '2024-12-17',
							value: 43,
						},
						{
							time: '2024-12-18',
							value: 29,
						},
						{
							time: '2024-12-19',
							value: 21,
						},
						{
							time: '2024-12-20',
							value: 32,
						},
						{
							time: '2024-12-21',
							value: 2,
						},
						{
							time: '2024-12-22',
							value: 15,
						},
						{
							time: '2024-12-23',
							value: 19,
						},
						{
							time: '2024-12-24',
							value: 16,
						},
						{
							time: '2024-12-25',
							value: 39,
						},
						{
							time: '2024-12-26',
							value: 9,
						},
						{
							time: '2024-12-27',
							value: 16,
						},
						{
							time: '2024-12-28',
							value: 45,
						},
						{
							time: '2024-12-29',
							value: 7,
						},
						{
							time: '2024-12-30',
							value: 49,
						},
						{
							time: '2024-12-31',
							value: 27,
						},
					],
				}}
			/>
		</>
	);
};
