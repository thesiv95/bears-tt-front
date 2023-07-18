import React from 'react'
import winnerCSS from '../../css/winners.module.css';

const Winner = ({ name, surname, score, isJackpot, date }) => {
	const winnerImg = isJackpot ? (
		<span className={winnerCSS.span}><img src={`./img/jackpot.png`} alt='jackpot' /></span>
	) : (
		<span className={winnerCSS.span}>{score} <img src={`./img/money.png`} alt='money' /></span>
	);
	return (
		<div className={winnerCSS.item}>
			<img className={winnerCSS.img} src="./img/player.png" alt="player" />
			<span className={winnerCSS.span}>{name} {surname}</span>
			{winnerImg}
			<span className={winnerCSS.span}>{date}</span>
		</div>
	)
}

export default Winner