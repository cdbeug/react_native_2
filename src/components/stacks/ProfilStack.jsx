import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../styles/colors";
import Cam from "../screens/Cam/Cam";
import Profil from "../screens/Profil/Profil";

const Pile = createStackNavigator();

const ProfilStack = () => {
	return (
		<Pile.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: colors.primaryColor },
				headerTitleStyle: { color: colors.lightColor },
			}}
		>
			<Pile.Screen
				name="profil"
				component={Profil}
				options={{
					title: "Votre page de profil",
					headerShown: false,
				}}
			/>
			<Pile.Screen
				options={{
					title: "Prenez une photo",
				}}
				name="camera"
				component={Cam}
			/>
		</Pile.Navigator>
	);
};

export default ProfilStack;
