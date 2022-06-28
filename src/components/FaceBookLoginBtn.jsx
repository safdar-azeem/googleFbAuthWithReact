import React from 'react'
import FacebookLogin from 'react-facebook-login'
import {
	userLogInStart,
	userLogInSuccess,
	userLogInFailure,
} from '../context/UserActions'
import { UserContext } from '../context/UserContext'
let env = import.meta.env

const FaceBookLoginBtn = () => {
	const { dispatch } = React.useContext(UserContext)

	const responseFacebook = (response) => {
		dispatch(userLogInStart())
		const user = {
			name: response.name,
			email: response.email,
			image: response.picture.data.url,
		}
		dispatch(userLogInSuccess(user))
	}

	return (
		<div>
			<FacebookLogin
				appId={env.VITE_APP_FACEBOOK_APP_ID}
				autoLoad={true}
				fields='name,email,picture'
				cssClass='btn  shadow  btn-primary btn-lg  w-100'
				callback={responseFacebook}
			/>
		</div>
	)
}

export default FaceBookLoginBtn
