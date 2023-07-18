import React from 'react'
import gameCSS from '../css/game.module.css'

const Game = () => {

	const startSpin = () => {
		console.log('TODO attach plugin')
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
						<p>1000</p>
					</div>
					<div className={gameCSS.controlsItem}>
						<p>Balance</p>
						<p>100</p>
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