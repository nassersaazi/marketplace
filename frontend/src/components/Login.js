
import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const history = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history('/');
				console.log(res);
				console.log(res.data);
			});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}


// import React ,{ useEffect, useState} from "react";
// import { Button, Container, Hero } from "./Styles";

// import { toast } from "react-toastify";

// const Login = ({ setAuth }) => {

// //   // React States
// //   const [errorMessages, setErrorMessages] = useState({});
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   // User Login info
// //   const database = [
// //     {
// //       username: "user1",
// //       password: "pass1"
// //     },
// //     {
// //       username: "user2",
// //       password: "pass2"
// //     }
// //   ];

// //   const errors = {
// //     uname: "invalid username",
// //     pass: "invalid password"
// //   };

// //   // Generate JSX code for error message
// // const renderErrorMessage = (name) =>
// // name === errorMessages.name && (
// //   <div className="error">{errorMessages.message}</div>
// // );

// //   const handleSubmit = (event) => {
// //     //Prevent page reload
// //     event.preventDefault();

// //     var { uname, pass } = document.forms[0];

// //     // Find user login info
// //     const userData = database.find((user) => user.username === uname.value);

// //     // Compare user info
// //     if (userData) {
// //       if (userData.password !== pass.value) {
// //         // Invalid password
// //         setErrorMessages({ name: "pass", message: errors.pass });
// //       } else {
// //         setIsSubmitted(true);
// //       }
// //     } else {
// //       // Username not found
// //       setErrorMessages({ name: "uname", message: errors.uname });
// //     }
// //   };

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
//   return (
//     <Container>
//       <Hero>
//         <section className="card-container login">
//         <div className="form">
//           <form onSubmit={onSubmitForm}>
//             <div className="input-container">
//               <label>Email </label>
//               <input type="text" name="email"  onChange={e => onChange(e)}/*required*/ />
//               {/* {renderErrorMessage("uname")} */}
//             </div>
//             <div className="input-container">
//               <label>Password </label>
//               <input type="password" name="password" onChange={e => onChange(e)} /*required *//>
//               {/* {renderErrorMessage("pass")} */}
//             </div>
//             <div className="button-container">
//               <Button><input type="submit"  /></Button>
//             </div>
//           </form>
          
//         </div>
//         </section>
//       </Hero>
//     </Container>
//   );
// }

// export default Login;


