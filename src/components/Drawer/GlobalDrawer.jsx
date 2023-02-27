import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "../containers/Navbar/Navbar";
import News from "../Pages/News/News";
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
			<Drawer.Screen name="news" component={News} options={{ title: "News" }} />
		</Drawer.Navigator>
	);
};

export default GlobalDrawer;
