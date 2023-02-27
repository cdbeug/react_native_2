import { Camera, CameraType } from "expo-camera";
import { useContext, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../contexts/UserContext";
const Cam = (props) => {
	const { user, setUser } = useContext(UserContext);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [cameraType, setCameraType] = useState(CameraType.back);
	let size = Dimensions.get("window");
	const largeurCamera = size.width;
	const hauteurCamera = size.width;
	const cameraRef = useRef();
	useEffect(() => {
		if (permission && permission.status != "granted") {
			requestPermission();
		}
	}, [permission]);

	function toggleCameraType() {
		console.log(refView);
		setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back);
	}

	async function takePic() {
		let image = await cameraRef.current.takePictureAsync();
		//On aurait envoyé les données dans une back end et recu une url pour l'image
		setUser({ ...user, avatar: image });
		props.navigation.pop();
	}

	if (!permission) {
		return <Text>Veuillez autoriser la camera</Text>;
	}

	if (!permission.granted) {
		return <Text>Vous avez refusé l'utilisation de la caméra</Text>;
	}

	return (
		<View style={styles.container}>
			<Camera
				ref={cameraRef}
				type={cameraType}
				ratio="1:1"
				style={{ width: largeurCamera, height: hauteurCamera }}
			>
				<View style={styles.buttons}>
					<TouchableOpacity onPress={toggleCameraType}>
						<MaterialIcons name="flip-camera-android" size={50} color="red" />
					</TouchableOpacity>
					<TouchableOpacity onPress={takePic}>
						<MaterialIcons name="camera" size={50} color="green" />
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: { width: "100%", height: "100%" },
	buttons: {
		display: "flex",
		flexDirection: "row",
		width: "75%",
		alignSelf: "center",
		justifyContent: "space-around",
		alignItems: "center",
		position: "absolute",
		bottom: 100,
	},
});

export default Cam;

//Exercice:
//Utiliser la documentation Expo pour afficher dans le composant Cam.jsx, la preview de la camera.
