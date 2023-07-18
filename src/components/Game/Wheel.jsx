import React, { useEffect } from "react";
import Winwheel from "winwheel";

const Wheel = () => {

	const [spinning, setSpinning] = React.useState(false);

	// This function is called when the sound is to be played.
	const playSound = () => {
		const audio = new Audio('../audio/tick.mp3');
		// Stop and rewind the sound if it already happens to be playing.
		audio.pause();
		audio.currentTime = 0;

		// Play the sound.
		audio.play();
	}

	// Get score after spinning, send score to backend
	const sendPrize = (indicatedSegment) => {
		setSpinning(false);
		const score = indicatedSegment.text;
		
	}

	useEffect(() => {
		// Create new wheel object specifying the parameters at creation time.
		let theWheel = new Winwheel({
			'outerRadius': 212,
			'innerRadius': 0,
			'textFontSize': 24,
			'textFontFamily': 'Verdana',
			'textFillStyle': '#ffffff',
			'textOrientation': 'horizontal',
			'textAlignment': 'outer',
			'numSegments': 8,
			'segments': [
				{ 'fillStyle': '#ffbf00', 'text': 'JACKPOT' },
				{ 'fillStyle': '#2e2e2e', 'text': '250' },
				{ 'fillStyle': '#ffbf00', 'text': '400' },
				{ 'fillStyle': '#2e2e2e', 'text': '10' },
				{ 'fillStyle': '#ffbf00', 'text': '100' },
				{ 'fillStyle': '#2e2e2e', 'text': '150' },
				{ 'fillStyle': '#ffbf00', 'text': '200' },
				{ 'fillStyle': '#2e2e2e', 'text': '750' },
			],
			'animation': {
				'type': 'spinToStop',
				'duration': 10, // Duration in seconds.
				'spins': 24,  // Default number of complete spins.
				'callbackFinished': sendPrize,
				'callbackSound': playSound, // Function to call when the tick sound is to be triggered.
				'soundTrigger': 'pin' // Specify pins are to trigger the sound, the other option is 'segment'.
			},
			'pins': {
				'number': 16,
				'fillStyle': '#c1a473',
				'outerRadius': 6
			}
		});
		theWheel.animation.spins = 6;
	}, []);
	return (
		<canvas id="canvas" width="434" height="434">
			<p align="center">Sorry, your browser doesn't support canvas</p>
		</canvas>
	);
};

export default Wheel;