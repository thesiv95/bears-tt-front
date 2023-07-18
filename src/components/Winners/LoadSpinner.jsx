import React from 'react'

const LoadSpinner = () => {
	return (
		<div className="d-flex justify-content-center" style={{marginBottom: '20px'}}>
			<div className="spinner-border text-light" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}

export default LoadSpinner