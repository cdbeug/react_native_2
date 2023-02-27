import { useState, useEffect } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const GOT = () => {
	const [personnages, setPersonnages] = useState([]);
	useEffect(() => {
		fetch("https://thronesapi.com/api/v2/Characters").then((response => {
			response.json().then((data) => {
				setPersonnages(data);
			});
		}));
	}, []);

	return (
		<View style={styles.container}>
			{personnages.map((personnage) => {
				return (
					<View>
						<Text>{personnage.fullName}</Text>
						<Image
							style={{ width: 300, height: 300 }}
							source={{ uri: personnage.imageUrl }}
						/>
						<Text>{personnage.title}</Text>
					</View>
				);
			})}
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {},
});

export default GOT;
