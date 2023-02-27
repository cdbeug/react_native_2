import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "./src/components/contexts/UserContext";
import Auth from "./src/components/screens/Auth/Auth";
import Profil from "./src/components/screens/Profil/Profil";
import ProfilStack from "./src/components/stacks/ProfilStack";
import { NavigationContainer } from "@react-navigation/native";
import GlobalDrawer from "./src/components/Drawer/GlobalDrawer";
export default function App() {
	const userFromDb = {
		id: 1,
		email: "sam.djm93@gmail.com",
		username: "Samy",
		avatar: null,
	};
	const [user, setUser] = useState(userFromDb);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				<View style={classes.container}>
					{user === null ? <Auth /> : <GlobalDrawer />}
					<StatusBar style="auto" />
				</View>
			</NavigationContainer>
		</UserContext.Provider>
	);
}

// 1 ere: Les composants natifs
// 2 eme: Les événements
// 3 eme le style: inLine style, StyleSheet

const classes = StyleSheet.create({
	container: {
		paddingTop: 50,
		flex: 1,
	},
});

//Exercice 1:
//1/ Créer deux composants et les exporter depuis:
//1.1/ src/components/screens/Auth/Auth.jsx
//1.2/ src/components/screens/Profil/Profil.jsx

//2/ Dans App.js, créer une variable d'état nommée user, initialisée a null
//2.1/ Utiliser un opérateur ternaire pour afficher le composant Auth si user est null sinon afficher le composant Profil

//3. Envoyer le code de App.js
