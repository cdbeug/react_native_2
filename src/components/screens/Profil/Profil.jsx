import { useContext } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { UserContext } from "../../contexts/UserContext";
import Card from "../../HOC/Card/Card";
import defaultImage from "../../../../assets/default_avatar.png";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import * as ImagePicker from "expo-image-picker";
const Profil = (props) => {
	const { user, setUser } = useContext(UserContext);
	console.log(props);
	async function openLibrary() {
		let resultat = await ImagePicker.launchImageLibraryAsync();
		if (!resultat.canceled) {
			setUser({ ...user, avatar: resultat.assets[0] });
		}
	}

	function gotToCamera() {
		props.navigation.navigate("camera");
	}

	return (
		<ScrollView>
			<Card title={user.username} content={user.email}>
				<View style={styles.imageContainer}>
					<Image
						style={[styles.image, { width: 300, height: 300 }]}
						source={user.avatar ? user.avatar : defaultImage}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity onPress={openLibrary}>
							<MaterialIcons name="photo-library" size={50} color={colors.primaryColor} />
						</TouchableOpacity>
						<TouchableOpacity onPress={gotToCamera}>
							<MaterialIcons name="photo-camera" size={50} color={colors.primaryColor} />
						</TouchableOpacity>
					</View>
				</View>

				<Text>
					{user.description ? user.description : "Veuillez entrer une description..."}
				</Text>
			</Card>
		</ScrollView>
	);
};

export default Profil;

const styles = StyleSheet.create({
	imageContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "hsl(0, 0%, 85%)",
		width: 300,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 10,
	},
	image: {
		borderRadius: 150,
	},
});

// facons de naviguer:
// Navigation en Stack/Pile: 
// Navigation en Drawer/Tiroire
// Navigation Tab/onglet:

//Exercice:
//Utiliser la fonction push des props, pour naviguer vers la route "camera"
//Envoyer Profil.jsx