import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../../../styles/colors";
const InputWithError = ({ holder, valeur, type, action, isPassword, errorMessage }) => {
	const [isHiddenPassword, setIsHiddenPassword] = useState(true);

	const couleurBordure =
		errorMessage == ""
			? "green"
			: errorMessage == undefined
			? colors.primaryColor
			: "red";

	function togglePassword() {
		setIsHiddenPassword(!isHiddenPassword);
	}

	return (
		<View style={styles.container}>
			<View style={[styles.inputContainer, { borderBottomColor: couleurBordure }]}>
				<TextInput
					style={[styles.input]}
					placeholder={holder}
					value={valeur}
					onChangeText={action}
					keyboardType={type}
					secureTextEntry={isPassword && isHiddenPassword}
				/>
				{isPassword && (
					<TouchableOpacity style={styles.icon} onPress={togglePassword}>
						<Feather
							name={!isHiddenPassword ? "eye" : "eye-off"}
							size={24}
							color={isHiddenPassword ? "green" : "orange"}
						/>
					</TouchableOpacity>
				)}
			</View>

			<Text style={styles.error}>{errorMessage}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	inputContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		margin: 5,
		backgroundColor: "white",
		borderRadius: 5,
		borderBottomWidth: 2,
	},
	input: {
		width: "90%",
		outlineStyle: "none",
		backgroundColor: "transparent",
	},
	error: {
		color: "red",
		margin: 5,
		marginVertical: 10,
	},
	icon: {
		width: "10%",
	},
});

export default InputWithError;
