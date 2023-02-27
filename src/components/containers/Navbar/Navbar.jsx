import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { colors } from "../../../styles/colors";
const Navbar = (props) => {
	const { user, setUser } = useContext(UserContext);

	function toggleMenu() {
		props.navigation.navigation.toggleDrawer();
	}

	function logout() {
		setUser(null);
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={toggleMenu}>
				<Entypo name="menu" size={24} color={colors.lightColor} />
			</TouchableOpacity>

			<Text style={styles.title}>{props.navigation.options.title}</Text>

			<TouchableOpacity onPress={logout}>
				<AntDesign name="logout" size={20} color={colors.lightColor} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		backgroundColor: colors.primaryColor,
	},
	title: {
		color: colors.lightColor,
		fontSize: 20,
	},
});

export default Navbar;
