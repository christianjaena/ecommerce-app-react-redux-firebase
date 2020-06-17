import React, { Component } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/FirebaseUtils';
import TitleHeader from '../TitleHeader/TitleHeader';

import {SignInContainer, ButtonsContainer} from './SignIn.styled'
class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignInContainer>
				<TitleHeader
					title='I already have an account'
					subtitle='Sign in with your email and password'
				/>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						label='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						label='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<ButtonsContainer>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
