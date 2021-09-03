import React from 'react';
import classes from './SignIn.module.scss'

const SignIn  = () => <section className = {classes.SignIn}>
			<h5 className = {classes['SignIn--title']}>Вход</h5>
			<form className ={ classes.Form}>
			<div>Email address</div>
			<input type = 'text' placeholder = 'Email address'/>		

			<div>Password</div>
			<input type = 'text' placeholder = 'Password'/>	
			<button type = 'button'>Login</button>
			</form>
		</section>

	
export default SignIn;