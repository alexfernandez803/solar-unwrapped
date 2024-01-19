import {z} from 'zod';

const SongSchema = z.object({
	title: z.string(),
	artist: z.string(),
	year: z.number(),
	songVideoPreviewUrl: z.string(),
});

export const ChapterCompostionSchema = z.object({
	videoUrl: z.string(),
	fontFamily: z.string(),
	songs: SongSchema.array(),
	title: z.string(),
});

const JokeSchema = z.object({
	source: z.string().default('Facebook'),
	previewUrl: z.string(),
	durationInFrames: z.number().default(160),
	startScale: z.number().optional(),
});

export const DadJokesCompositionSchema = z.object({
	videoUrl: z.string(),
	fontFamily: z.string(),
	bgMusicURL: z.string(),
	title: z.string(),
	jokes: JokeSchema.array(),
	jokesDuration: z.number(),
});

export const DateValueSchema = z.object({
	dateTime: z.string(),
	value: z.number(),
});

export type DateValue = z.infer<typeof DateValueSchema>;

export type Song = z.infer<typeof SongSchema>;

export const dataPointSchema = z.object({
	time: z.string(),
	value: z.number(),
});

export const logicalSelectionSchema = z.object({
	from: z.number(),
	to: z.number(),
});

export const tradingChartSchema = z.object({
	data: z.array(dataPointSchema),
	token: z.string(),
	userSelection: logicalSelectionSchema,
});

export type TradingChart = z.infer<typeof tradingChartSchema>;

export type DataPoint = z.infer<typeof dataPointSchema>;

export type LogicalSelection = z.infer<typeof logicalSelectionSchema>;
