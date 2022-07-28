
import React, { useEffect, useState } from 'react';
import './App.css';
import AdminServices from './components/admin/services';
import ServiceLoadingComponent from './components/services/serviceLoading';
import axiosInstance from './axios';

function Admin() {
	const ServiceLoading = ServiceLoadingComponent(AdminServices);
	const [appState, setAppState] = useState({
		loading: true,
		services: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allServices = res.data;
			setAppState({ loading: false, services: allServices });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Services</h1>
			<ServiceLoading isLoading={appState.loading} services={appState.services} />
		</div>
	);
}
export default Admin;