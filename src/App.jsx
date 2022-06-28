import React from 'react'
import GoogleLogInBtn from './components/GoogleLogInBtn'
import FaceBookLoginBtn from './components/FaceBookLoginBtn'
import Profile from './components/Profile'
import { gapi } from 'gapi-script'
import UserContextProvider from './context/UserContext'
let env = import.meta.env

const App = () => {
	React.useEffect(() => {
		gapi.load('client:auth2', () => {
			gapi.client.init({
				clientId: env.VITE_APP_GOOGLE_CLIENT_ID,
				scope: '',
			})
		})
	}, [])

	return (
		<UserContextProvider>
			<section className='row '>
				<div className='col-12 col-md-6 px-5 py-5'>
					<GoogleLogInBtn />
					<FaceBookLoginBtn />
				</div>
				<div className='col-12 col-md-6 vh-100'>
					<Profile />
				</div>
			</section>
		</UserContextProvider>
	)
}

export default App
