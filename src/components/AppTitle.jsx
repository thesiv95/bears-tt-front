import React from 'react'
import appTitleCSS from '../css/appTitle.module.css'

const AppTitle = () => {
	return (
		<div className="row header">
			<div className="col-12">
				<h1 className={appTitleCSS.h1}>Wheel of fortune</h1>
			</div>
		</div>
	)
}

export default AppTitle