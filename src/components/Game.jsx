import React from 'react'
import gameCSS from '../css/game.module.css'
import doAPIRequest from '../utils/doAPIRequest';
import Wheel from './Game/Wheel';

const Game = () => {


	const [jackpot, setJackpot] = React.useState(0);
	const [balance, setBalance] = React.useState(0);

	React.useEffect(() => {
		const getJackpot = async () => {
			const { randomJackpot } = await doAPIRequest('/winners/jackpot');
			setJackpot(randomJackpot);
			// put this into local storage to be able to use this value in case user gets jackpot
			localStorage.setItem('bears_jackpot', randomJackpot);
			
		}
		getJackpot();
	}, []);

	// -------------------------------------------------------
	// Click handler for spin button.
	// -------------------------------------------------------
	function startSpin() {
		// Ensure that spinning can't be clicked again while already running.
		// if (!wheelSpinning) {

			console.log('TODO: attach button to spinner component')
			setBalance(balance + 123);
			// // Begin the spin animation by calling startAnimation on the wheel object.
			// theWheel.startAnimation();

			// // Set to true so that power can't be changed and spin button re-enabled during
			// // the current animation. The user will have to reset before spinning again.
			// wheelSpinning = true;
		// }
	}


	return (
		<div className="row game">
			<div className="col-6">
				<div className={gameCSS.wrapper + ' float-end'}>
					<Wheel />
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