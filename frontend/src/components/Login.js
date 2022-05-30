import React ,{ useEffect, useState} from "react";
import { Container, Hero } from "./Styles";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {

//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   // Generate JSX code for error message
// const renderErrorMessage = (name) =>
// name === errorMessages.name && (
//   <div className="error">{errorMessages.message}</div>
// );

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

const [inputs, setInputs] = useState({
  email: "",
  password: ""
});

const { email, password } = inputs;

const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });

const onSubmitForm = async e => {
  e.preventDefault();
  try {
    const body = { email, password };
    const response = await fetch(
      "http://localhost:5000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const parseRes = await response.json();

    if (parseRes.jwtToken) {
      localStorage.setItem("token", parseRes.jwtToken);
      setAuth(true);
      toast.success("Logged in Successfully");
    } else {
      setAuth(false);
      toast.error(parseRes);
    }
  } catch (err) {
    console.error(err.message);
  }
};
  return (
    <Container>
      <Hero>
        <section className="card-container">
        <div className="form">
          <form onSubmit={onSubmitForm}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email"  onChange={e => onChange(e)}/*required*/ />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" onChange={e => onChange(e)} /*required *//>
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          
        </div>
        </section>
      </Hero>
    </Container>
  );
}

export default Login;
