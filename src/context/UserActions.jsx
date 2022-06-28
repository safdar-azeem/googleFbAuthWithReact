export const userLogInStart = () => ({
	type: 'USER_LOGIN_START',
})

export const userLogInSuccess = (user) => ({
	type: 'USER_LOGIN_SUCCESS',
	payload: user,
})

export const userLogInFailure = (error) => ({
	type: 'USER_LOGIN_FAILURE',
	payload: error,
})

export const userLogOut = () => ({
	type: 'USER_LOGOUT',
})
