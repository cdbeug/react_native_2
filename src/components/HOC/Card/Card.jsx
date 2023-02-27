import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

// create a component
export default function Card({ title, content, children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>

			<View style={styles.children}>{children}</View>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryColor,
		borderRadius: 10,
		width: "90%",
		alignSelf: "center",
	},
	header: {},
	title: {
		color: colors.lightColor,
		fontSize: 35,
		textAlign: "center",
	},
	content: {
		color: colors.lightColor,
		fontSize: 20,
		textAlign: "center",
		padding: 5,
	},
	children: {
		padding: 10,
		backgroundColor: colors.lightColor,
	},
});

//make this component available to the app
