import React ,{ useEffect, useState} from "react";
import { Button,Container, Hero } from "./Styles";
import { Navigate  } from 'react-router-dom';

//import { toast } from "react-toastify";

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [organisation, setOrganisation] = useState(''); //this should be a dropdown
    const [role, setRole] = useState(''); //this should be a dropdown
    const [redirect, setRedirect] = useState(false);

    
    const onSubmitForm = async e => {
        e.preventDefault();

        try {
          const creator = "nasser"; // this should be retrieved from the state of admin currently logged in
          const body = { name,email,password,organisation,role ,creator};
          console.log("we are here")
          console.log(body)
          const response = await fetch("http://localhost:3080/api/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          if (response) {
            setRedirect(true);
          }
          console.log(response);
        } catch (err) {
          console.error(err.message);
        }

        
        
        
    }

    if (redirect) {
      return <Navigate to={'/'}/>
  }

  return (
    <Container>
      <Hero>
        <section className="card-container login">
        <div className="form">
          <form onSubmit={onSubmitForm}> 
            <div className="input-container">
              <label>User Name </label>
              <input type="text" name="username" 
              onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email" 
              onChange={e => setEmail(e.target.value)} />
            
            </div>
            <div className="input-container">
              <label>User Password </label>
              <input type="password" name="password" 
              onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="input-container">
              <label>Organisation </label>
              <input type="text" name="organisation" 
              onChange={e => setOrganisation(e.target.value)} />
            </div>
            <div className="input-container">
              <label>Role </label>
              <input type="text" name="role" 
              onChange={e => setRole(e.target.value)} />
            </div>
            
            <div className="button-container">
            <Button type="button"><input type="submit" value="SAVE" /></Button>
              
            </div>
          </form>
          
        </div>
        </section>
      </Hero>
    </Container>
  );
}

export default AddUser;
