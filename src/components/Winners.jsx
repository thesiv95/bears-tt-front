import React from 'react'
import Winner from './Winners/Winner'
import winnerCSS from '../css/winners.module.css';

const Winners = () => {
	return (
		<div className="row">
			<div className={'col-md-12 ' + winnerCSS.wrapper}>
				<h1 className={winnerCSS.h1}>Winners</h1>
				<Winner name={'name'} surname={'surname'} score={999} isJackpot={false} date={'date'} />
				<Winner name={'name'} surname={'surname'} score={999} isJackpot={false} date={'date'} />
				<Winner name={'name'} surname={'surname'} score={999} isJackpot={true} date={'date'} />
				<Winner name={'name'} surname={'surname'} score={999} isJackpot={false} date={'date'} />
			</div>
		</div>
	)
}

export default Winners