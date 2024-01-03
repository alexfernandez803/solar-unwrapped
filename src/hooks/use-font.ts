import {useEffect, useState} from 'react';
import {continueRender, delayRender, staticFile} from 'remotion';

export const useFont = (selectedFont: string) => {
	const [waitForFont] = useState(() => delayRender());

	useEffect(() => {
		const font = new FontFace(
			selectedFont,
			`url(${staticFile(`fonts/${selectedFont}.ttf`)})`
		).load();
		font.then(async () => {
			document.fonts.add(await font);
			continueRender(waitForFont);
		});
	}, [waitForFont]);
};
