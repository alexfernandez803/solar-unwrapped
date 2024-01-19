import {Composition} from 'remotion';
import {SolarChartComposition} from './SolarChartComposition';
import {generateDataPointData} from './utils';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="main"
				component={SolarChartComposition}
				durationInFrames={1260 / 4}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{
					token: 'BTC',
					userSelection: {
						from: 0,
						to: 100,
					},
					data: generateDataPointData('monthly'),
				}}
			/>
		</>
	);
};
