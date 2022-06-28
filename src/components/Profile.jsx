import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Avatar from './Avatar'
import LogOutBtn from './LogOutBtn'

const Profile = () => {
	const { state } = useContext(UserContext)

	return (
		<div className='bg-secondary bg-opacity-25  h-100 py-5'>
			<section className='d-flex justify-content-center flex-column align-items-center '>
				{state.user ? (
					<>
						<header>
							<Avatar img={state?.user?.image} size='100px' />
						</header>
						<main className='mt-5'>
							<div className='d-flex mb-3'>
								<h4>Name:</h4>
								<h4 className='text-dark text-opacity-75 ms-4'>
									{state.user.name
										? state.user.name
										: 'User name will be here'}
								</h4>
							</div>
							<div className='d-flex mb-3'>
								<h4>Email:</h4>
								<h4 className='text-dark text-opacity-75 ms-4'>
									{state.user.name
										? state.user.email
										: 'User email will be here'}
								</h4>
							</div>
							<LogOutBtn />
						</main>
					</>
				) : (
					<p className='alert'>Please login to see your profile</p>
				)}
			</section>
		</div>
	)
}

export default Profile
