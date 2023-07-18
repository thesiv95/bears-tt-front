let wheelSpinning = false;

console.log(wheelSpinning)

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
		'callbackFinished': alertPrize,
		'callbackSound': playSound, // Function to call when the tick sound is to be triggered.
		'soundTrigger': 'pin' // Specify pins are to trigger the sound, the other option is 'segment'.
	},
	'pins': {
		'number': 16,
		'fillStyle': '#c1a473',
		'outerRadius': 6
	}
});

// Loads the tick audio sound in to an audio object.
let audio = new Audio('../audio/tick.mp3');

// This function is called when the sound is to be played.
function playSound() {
	// Stop and rewind the sound if it already happens to be playing.
	audio.pause();
	audio.currentTime = 0;

	// Play the sound.
	audio.play();
}

// Vars used by the code in this page to do power controls.
theWheel.animation.spins = 6;

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin() {
	// Ensure that spinning can't be clicked again while already running.
	if (!wheelSpinning) {

		// Begin the spin animation by calling startAnimation on the wheel object.
		theWheel.startAnimation();

		// Set to true so that power can't be changed and spin button re-enabled during
		// the current animation. The user will have to reset before spinning again.
		wheelSpinning = true;
	}
}

// Get value that we got
function alertPrize(indicatedSegment) {
	wheelSpinning = false;
	console.log(indicatedSegment.text);
	// indicatedSegment.text === 'JACKPOT'
}