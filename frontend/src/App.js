import React ,{ useEffect, useState} from "react";
import { Navigate, Routes,Link, Route } from "react-router-dom";
import { Home, Header,Services,Register,Logout, 
 Login,AddCategory,AddUser,Service,AddService,
   AddOrganisation, Create, Edit, Delete} from "./components";
import Admin from './Admin';
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'
import "./App.css";


function App() {

  // const checkAuthenticated = async () => {
  //   try {
  //     let flag = false;
 
  //      //check user has JWT token
  //      localStorage.getItem("token") ? flag=true : flag=false
      
       

  //     flag === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
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
      {/* <AuthProvider> */}
      <Routes >
        
          <Route 
          exact path='/' 
          element={
          <PrivateRoute>
            <Home/>
            </PrivateRoute>} />
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
          <Route exact path="/service/:id" element={<Service />} />
        
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
