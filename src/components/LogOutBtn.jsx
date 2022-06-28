import React from 'react'
import { userLogOut } from '../context/UserActions'
import { UserContext } from '../context/UserContext'

const LogOutBtn = () => {
	const { dispatch } = React.useContext(UserContext)

	const handleLogOut = () => {
		dispatch(userLogOut())
	}
	return (
		<button onClick={handleLogOut} className='btn btn-dark w-100'>
			Log Out
		</button>
	)
}

export default LogOutBtn
