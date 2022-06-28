import React from 'react'

const Avatar = ({ img, size }) => {
	return (
		<section
			className='rounded-circle bg-secondary bg-opacity-25 d-flex justify-content-center align-items-center'
			style={{
				width: size,
				height: size,
			}}>
			{img ? (
				<img
					src={img}
					alt='avatar'
					className='w-100 h-100 rounded-circle'
				/>
			) : (
				<i className='fa-solid fa-user text-secondary h3 mb-0'></i>
			)}
		</section>
	)
}

export default Avatar
