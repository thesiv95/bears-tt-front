import React from 'react'
import gameCSS from '../css/game.module.css';
import doAPIRequest from '../utils/doAPIRequest';
import WheelComponent from './Game/WheelComponent';

import { segments, segColors } from './Game/wheelData';
import ModalFinish from './Game/ModalFinish';

const Game = () => {
	const [jackpot, setJackpot] = React.useState(0);
	const [balance, setBalance] = React.useState(0);
	const [modal, setModal] = React.useState(false);

	const modalFinishCloseHandler = () => setModal(false);

	const finishHandler = async (winner) => {
		if (winner === 'JACKPOT') {
			setBalance(balance + jackpot);
		} else {
			setBalance(balance + parseInt(winner));
		}

		await doAPIRequest('/winners', 'post', {
			user_id: 1, // hardcoded here but should be defined by auth
			score: winner === 'JACKPOT' ? jackpot : parseInt(winner),
			is_jackpot: winner === 'JACKPOT' ? 1 : 0,
			win_date: new Date().toISOString().split('T')[0]
		});
		setModal(true);
	}

	React.useEffect(() => {
		const getJackpot = async () => {
			const { randomJackpot } = await doAPIRequest('/winners/jackpot');
			setJackpot(randomJackpot);
		}
		getJackpot();
	}, []);

	return (
		<div className="row game">
			<div className="col-6">
				<div className={gameCSS.wrapper + ' float-end'}>
					<WheelComponent
						segments={segments}
						segColors={segColors}
						winningSegment=""
						onFinished={(winner) => finishHandler(winner)}
						primaryColor="black"
						primaryColoraround="#d8d8d9"
						contrastColor="white"
						buttonText="Spin"
						fontFamily='sans-serif'
						isOnlyOnce={false}
						size={150}
						upDuration={50}
						downDuration={2000}
					/>
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
				</div>
			</div>
			{modal && <ModalFinish close={modalFinishCloseHandler} balance={balance} />}
		</div>
	)
}

export default Game