import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

const Logout =  () => {
	const history = useNavigate();
	let {logoutUser} = useContext(AuthContext)
	useEffect(() => {
		// const response = axiosInstance.post('user/logout/blacklist/', {
		// 	refresh_token: localStorage.getItem('refresh_token'),
		// });
		// localStorage.removeItem('access_token');
		// localStorage.removeItem('refresh_token');
		// axiosInstance.defaults.headers['Authorization'] = null;
	
		// history('/login');
		logoutUser();
	});
	
	return <div>Logout</div>;
}

export default Logout;