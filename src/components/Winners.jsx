import React from 'react'
import Winner from './Winners/Winner'
import winnerCSS from '../css/winners.module.css';
import doAPIRequest from '../utils/doAPIRequest';
import LoadSpinner from './Winners/LoadSpinner';

const Winners = () => {

	const formatDate = (dateString) => {
		// DD.MM.YYYY from ISODate
		dateString = dateString.split('T')[0];
		dateString = dateString.split('-').reverse().join('.');
		return dateString;
	}

	const [loading, setLoading] = React.useState(true);
	const [winners, setWinners] = React.useState(null);

	React.useEffect(() => {
		const getWinners = async () => {
			const winnersList = await doAPIRequest('/winners');
			setWinners(winnersList);
			setLoading(false);
		}
		getWinners();
	}, []);

	if (loading) {
		return (
			<div className="row">
				<div className={'col-md-12 ' + winnerCSS.wrapper}>
					<h1 className={winnerCSS.h1}>Winners</h1>
					<LoadSpinner />
				</div>
			</div>
		)
	} else {
		return (
			<div className="row">
				<div className={'col-md-12 ' + winnerCSS.wrapper}>
					<h1 className={winnerCSS.h1}>Winners</h1>
					{winners.map((winner,index) => (
						<Winner
							key={index}
							name={winner.first_name}
							surname={winner.last_name}
							score={winner.score}
							isJackpot={Boolean(winner.is_jackpot)}
							date={formatDate(winner.win_date)}
						/>
					))}
				</div>
			</div>
		)
	}


}

export default Winners