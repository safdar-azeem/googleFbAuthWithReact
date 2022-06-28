export const initalState = {
	user: null,
	isAuthenticated: false,
	isLoading: false,
	error: null,
}

const userReducer = (state, action) => {
	switch (action.type) {
		case 'USER_LOGIN_START':
			return {
				...state,
				isLoading: true,
				error: null,
			}
		case 'USER_LOGIN_SUCCESS':
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				user: action.payload,
				error: null,
			}

		case 'USER_LOGIN_FAILURE':
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				error: action.payload,
			}

		case 'USER_LOGOUT':
			return {
				...state,
				isAuthenticated: false,
				user: null,
				error: null,
			}

		default:
			return state
	}
}

export default userReducer
