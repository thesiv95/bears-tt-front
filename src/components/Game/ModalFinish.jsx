import React from 'react'
import gameCSS from '../../css/game.module.css';

const ModalFinish = ({ balance, close }) => {

	return (
		<div className="modalFinishContainer">
			<div className='modalFinishWindow'>
				<p className='modalFinishItem'>YOU WIN!</p>
				<p className='modalFinishItem'> {balance} <img src='./img/money.png' alt='money' /></p>
				<p>
					<button onClick={close} className={gameCSS.controlsButton}>
						<p>GREAT</p>
					</button>
				</p>

			</div>
		</div>
	)
}

export default ModalFinish