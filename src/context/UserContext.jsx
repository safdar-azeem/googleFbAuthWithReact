import React from 'react'

export const UserContext = React.createContext()
import userReducer, { initalState } from './UserReducer'

const UserContextProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(userReducer, initalState)

	return (
		<UserContext.Provider
			value={{
				state,
				dispatch,
			}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
