import React from 'react'
import { TweenMax } from 'gsap'
import gameCSS from '../css/game.module.css'
import doAPIRequest from '../utils/doAPIRequest';
import Winwheel from 'winwheel';
import wheelParams from '../utils/wheelParams';

const Game = () => {
	const [wheelSpinning, setWheelSpinning] = React.useState(false);
	const [jackpot, setJackpot] = React.useState(0);
	const [balance, setBalance] = React.useState(0);

	const finishHandler = async (indicatedSegment) => {
		let finalScore = 0;
		if (indicatedSegment.text === 'JACKPOT') {
			finalScore = jackpot;
		} else {
			finalScore = parseInt(indicatedSegment.text);
		}
		setBalance(balance + finalScore);
		await doAPIRequest('/winners', 'post', {
			user_id: 1, // hardcoded here but should be defined by auth
			score: finalScore,
			is_jackpot: indicatedSegment.text === 'JACKPOT' ? 1 : 0,
			win_date: new Date().toISOString().split('T')[0]
		});
	}

	// The way to connect wheel lib to react and keep it during the user session
	const theWheel = React.useRef(
		new Winwheel({
			...wheelParams,
			animation: {
				type: 'spinToStop',
				duration: 10, // Duration in seconds.
				spins: 24,  // Default number of complete spins.
				callbackFinished: finishHandler
			},
			
		}));

	React.useEffect(() => {
		const getJackpot = async () => {
			const { randomJackpot } = await doAPIRequest('/winners/jackpot');
			setJackpot(randomJackpot);
		}
		getJackpot();
		theWheel.current.draw();
	}, []);

	// Click handler for spin button
	function startSpin() {
		theWheel.current.startAnimation();
	}

	return (
		<div className="row game">
			<div className="col-6">
				<div className={gameCSS.wrapper + ' float-end'}>
					<canvas id="canvas" width="434" height="434">
						<p align="center">Sorry, your browser doesn't support canvas</p>
					</canvas>
					<img className={gameCSS.picker} src="./img/picker.png" alt="V" />
				</div>
			</div>
			<div className="col-6">
				<div className={gameCSS.controls + ' float-start'}>
					<div className={gameCSS.controlsItem}>
						<p>Jackpot</p>
						<p>{jackpot}</p>
					</div>
					<div className={gameCSS.controlsItem}>
						<p>Balance</p>
						<p>{balance}</p>
					</div>
					<button className={gameCSS.controlsButton} onClick={startSpin}>
						<p>Spin</p>
						<p>wheel</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Game