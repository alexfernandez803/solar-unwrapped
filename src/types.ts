import {zColor} from '@remotion/zod-types';
import {z} from 'zod';

export const DateValueSchema = z.object({
	dateTime: z.string(),
	value: z.number(),
});

export type DateValue = z.infer<typeof DateValueSchema>;

export const dataPointSchema = z.object({
	time: z.string(),
	value: z.number(),
});

export const logicalSelectionSchema = z.object({
	from: z.number(),
	to: z.number(),
});

export const themeSchema = z.object({
	backgroundColor: zColor().optional(),
	lineColor: zColor().optional(),
	textColor: zColor().optional(),
	areaTopColor: zColor().optional(),
	areaBottomColor: zColor().optional(),
	fontFamily: z.string().optional(),
	fontSize: z.number().optional(),
	vertLineColor: zColor().optional(),
});

export const tradingChartSchema = z.object({
	data: z.array(dataPointSchema),
	userSelection: logicalSelectionSchema,
	theme: themeSchema.optional(),
});

const chartSchema = z.object({
	data: z.array(dataPointSchema),
	currentData: z.array(dataPointSchema),
	theme: themeSchema.optional(),
	lowestValue: z.number(),
	highestValue: z.number(),
	height: z.number().optional(),
	width: z.number().optional(),
	fontSize: z.number().optional(),
});

export type TradingChartProps = z.infer<typeof tradingChartSchema>;

export type ChartProps = z.infer<typeof chartSchema>;

export type DataPoint = z.infer<typeof dataPointSchema>;

export type LogicalSelection = z.infer<typeof logicalSelectionSchema>;
