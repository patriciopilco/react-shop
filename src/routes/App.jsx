import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../containers/Home';
import RecoveryPassword  from '../containers/RecoveryPassword'
import NotFound from '../containers/NotFound';
import '../styles/global.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
	const initialState = useInitialState();
    return (
		<AppContext.Provider value={initialState}>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />			
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;