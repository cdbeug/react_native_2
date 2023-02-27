import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginForm from "../../containers/LoginForm/LoginForm";
import SignupForm from "../../containers/Signup/Signup";
import Card from "../../HOC/Card/Card";

export default function Auth() {

	//2
	const [isLogin, setIsLogin] = useState(true);

	//3
	function toggleLogin() {
		setIsLogin(!isLogin);
	}

	return (
		<View style={styles.container}>
			<Card title="Bienvenue!" content={isLogin ? "Connexion" : "Inscription"}>
				{isLogin ? <LoginForm /> : <SignupForm />}

				<TouchableOpacity
					style={{ color: "royalblue", textDecoration: "underline" }}
					onPress={toggleLogin}
				>
					<Text>{isLogin ? "Inscrivez-vous!" : "Connectez-vous!"}</Text>
				</TouchableOpacity>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 100,
	},
});

//Exercice:
//1. Créer deux composants:
// LoginForm: /src/components/containers/LoginForm/LoginForm.jsx
// SignupForm: /src/components/containers/SignupForm/SignupForm.jsx

//Dans Auth.jsx:
//2. Déclarer une variable d'état et son setter nommée isLogin intialisée a true.

//3. Déclarer une fonction qui permet d'inverser la variable d'état.

//4. Afficher grace a la condition isLogin le composant LoginForm ou SignupForm

//5. Utiliser le composant natif TouchableOpacity, pour permettre a l'utilisateur de switcher entre les formulaires.
