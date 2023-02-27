//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Btn from "../../ui/Btn/Btn";
import InputWithError from "../../ui/InputWithError/InputWithError";
import { AntDesign } from "@expo/vector-icons";
import {
	getConfirmPasswordError,
	getEmailError,
	getPasswordError,
	getUsernameError,
	validateConfirmPassword,
	validateEmail,
	validatePassword,
	validateUsername,
	validateUsernameTooLong,
	validateUsernameTooShort,
} from "../../../utils/validations";
import { signupWithEmailAndPassword } from "../../../utils/requests/authentifications";
import { UserContext } from "../../contexts/UserContext";
// create a component
const SignupForm = () => {
	const { setUser } = useContext(UserContext);
	//1. Variables d'états pour stocker les entrées
	const [emailInput, setEmailInput] = useState("");
	const [emailError, setEmailError] = useState();

	const [usernameInput, setUsernameInput] = useState("");
	const [usernameError, setUsernameError] = useState();

	const [passwordInput, setPasswordInput] = useState("");
	const [passwordError, setPasswordError] = useState();

	const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState();

	//2. les fonctions handle pour mettre a jour les entrées
	function handleEmail(text) {
		setEmailInput(text);
	}

	function handleUsername(text) {
		setUsernameInput(text);
	}

	function handlePassword(text) {
		setPasswordInput(text);
	}

	function handleConfirmPassword(text) {
		setConfirmPasswordInput(text);
	}

	function signup() {
		setEmailError(getEmailError(emailInput));

		setPasswordError(getPasswordError(passwordInput));

		setConfirmPasswordError(getConfirmPasswordError(passwordInput, confirmPasswordInput));

		setUsernameError(getUsernameError(usernameInput));

		if (
			validateEmail(emailInput) &&
			validatePassword(passwordInput) &&
			validateConfirmPassword(passwordInput, confirmPasswordInput) &&
			validateUsername(usernameInput)
		) {
			//Utiliser une fonction asynchrone qui va envoyer les données à la backend retourner un objet representant l'utilisateur
			signupWithEmailAndPassword(emailInput, usernameInput, passwordInput).then(
				(data) => {
					setUser(data);
				}
			);
		}
	}

	return (
		<View style={styles.container}>
			<InputWithError
				holder="Email"
				valeur={emailInput}
				action={handleEmail}
				errorMessage={emailError}
				type="email-address"
			/>

			<InputWithError
				holder="Username"
				valeur={usernameInput}
				action={handleUsername}
				errorMessage={usernameError}
				type="email-address"
			/>

			<InputWithError
				holder="Mot de passe"
				valeur={passwordInput}
				action={handlePassword}
				errorMessage={passwordError}
				type="default"
				isPassword
			/>

			<InputWithError
				holder="Confirmez votre mot de passe"
				valeur={confirmPasswordInput}
				action={handleConfirmPassword}
				errorMessage={confirmPasswordError}
				type="default"
				isPassword
			/>

			<Btn action={signup} label="S'inscrire">
				<AntDesign name="login" size={24} color="whitesmoke" />
			</Btn>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {},
});

//make this component available to the app
export default SignupForm;
