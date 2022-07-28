import React ,{ useEffect, useState} from "react";
import { Navigate, Routes,Link, Route } from "react-router-dom";
import { Home, Header,Services,Register,Logout, 
  Organisations,Login,AddCategory,AddUser,Service,AddService,
  Users, Footer, AddOrganisation, Create, Edit, Delete} from "./components";
import Admin from './Admin';
import "./App.css";

function App() {

  // const checkAuthenticated = async () => {
  //   try {
  //     const res = await fetch("http://localhost:5000/auth/verify", {
  //       method: "POST",
  //       headers: { jwt_token: localStorage.token }
  //     });

  //     const parseRes = await res.json();

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   checkAuthenticated();
  // }, []);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const setAuth = boolean => {
  //   setIsAuthenticated(boolean);
  // };
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/admin" element={<Admin />} />
				<Route exact path="/admin/create" element={<Create />} />
				<Route exact path="/admin/edit/:id" element={<Edit />} />
				<Route exact path="/admin/delete/:id" element={<Delete />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/addService" element={<AddService />} />
        <Route exact path="/addUser" element={<AddUser />} />
        <Route exact path="/addCategory" element={<AddCategory />} />
        <Route exact path="/addOrganisation" element={<AddOrganisation />} />
        <Route exact path="/services/:id" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
