import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "../containers/Navbar/Navbar";
import GOT from "../screens/GOT/GOT";
import ProfilStack from "../stacks/ProfilStack";

const Drawer = createDrawerNavigator();
const GlobalDrawer = () => {
	return (
		<Drawer.Navigator
			screenOptions={{ header: (navProps) => <Navbar navigation={navProps} /> }}
		>
			<Drawer.Screen
				name="profilstack"
				component={ProfilStack}
				options={{ title: "Page de profil" }}
			/>

			<Drawer.Screen name="got" component={GOT} options={{ title: "Game of thrones" }} />
		</Drawer.Navigator>
	);
};

export default GlobalDrawer;
