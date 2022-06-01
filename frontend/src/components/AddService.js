import React ,{ useEffect, useState} from "react";
import { Container, Hero } from "./Styles";

//import { toast } from "react-toastify";

const AddService = () => {


// const [inputs, setInputs] = useState({
//   email: "",
//   password: ""
// });

// const { email, password } = inputs;

// const onChange = e =>
//   setInputs({ ...inputs, [e.target.name]: e.target.value });

// const onSubmitForm = async e => {
//   e.preventDefault();
//   try {
//     const body = { email, password };
//     const response = await fetch(
//       "http://localhost:5000/auth/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(body)
//       }
//     );

//     const parseRes = await response.json();

//     if (parseRes.jwtToken) {
//       localStorage.setItem("token", parseRes.jwtToken);
//       setAuth(true);
//       toast.success("Logged in Successfully");
//     } else {
//       setAuth(false);
//       toast.error(parseRes);
//     }
//   } catch (err) {
//     console.error(err.message);
//   }
// };
  return (
    <Container>
      <Hero>
        <section className="card-container login">
        <div className="form">
          <form > 
            <div className="input-container">
              <label>Service Name </label>
              <input type="text" name="service_name"  />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Description </label>
              <input type="text" name="description"  />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Organisation </label>
              <input type="text" name="organisation"  />
              {/* {renderErrorMessage("uname")} */}
            </div>
            
            <div className="button-container">
              <input type="submit"  />
            </div>
          </form>
          
        </div>
        </section>
      </Hero>
    </Container>
  );
}

export default AddService;
