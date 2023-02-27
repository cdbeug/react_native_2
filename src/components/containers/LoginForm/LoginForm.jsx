//import liraries

import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Btn from "../../ui/Btn/Btn";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../../ui/InputWithError/InputWithError";
import {
	getEmailError,
	getPasswordError,
	validateEmail,
	validatePassword,
} from "../../../utils/validations";
// create a component
const LoginForm = () => {
	//1. Variables d'états pour stocker les entrées
	const [emailInput, setEmailInput] = useState("");
	const [emailError, setEmailError] = useState();

	const [passwordInput, setPasswordInput] = useState("");
	const [passwordError, setPasswordError] = useState();

	//2. les fonctions handle pour mettre a jour les entrées
	function handleEmail(text) {
		setEmailInput(text);
	}

	function handlePassword(text) {
		setPasswordInput(text);
	}

	function login() {
		setEmailError(getEmailError(emailInput));
		setPasswordError(getPasswordError(passwordInput));

		if (validateEmail(emailInput) && validatePassword(passwordInput)) {
			//Envoyer les données vers une back-end
			alert("Connexion réussie!");
			return;
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
				holder="Mot de passe"
				valeur={passwordInput}
				action={handlePassword}
				errorMessage={passwordError}
				type="default"
				isPassword
			/>

			<Btn action={login} label="Se connecter">
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
export default LoginForm;
