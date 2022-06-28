import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { UserContext } from '../context/UserContext'
import {
	userLogInStart,
	userLogInSuccess,
	userLogInFailure,
} from '../context/UserActions'
let env = import.meta.env

const GoogleLogInBtn = () => {
	const { dispatch } = React.useContext(UserContext)

	const onSuccess = (response) => {
		dispatch(userLogInStart())
		const { profileObj } = response
		const user = {
			name: profileObj.name,
			email: profileObj.email,
			image: profileObj.imageUrl,
		}
		dispatch(userLogInSuccess(user))
	}

	const onFailure = (response) => {
		dispatch(userLogInFailure(response))
	}

	return (
		<div>
			<GoogleLogin
				clientId={env.VITE_APP_GOOGLE_CLIENT_ID}
				buttonText='Sign in with Google'
				onSuccess={onSuccess}
				onFailure={onFailure}
				className='w-100 d-flex justify-content-center shadow rounded-3 mb-4'
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	)
}

export default GoogleLogInBtn
