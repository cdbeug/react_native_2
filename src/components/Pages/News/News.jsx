import { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
}
    from "react-native";
import * as WebBrowser from 'expo-web-browser';
import axios from "axios";
import InputWithError from "../../UI/InputWithError/InputWithError";
import { AntDesign } from "@expo/vector-icons";

const API_KEY = "621f73acac1f47ba82eff38bf9c5169f";

const NEWS_GET_TOP_HEADLINES =
    "https://newsapi.org/v2/top-headlines?country=fr&apiKey=" + API_KEY;

const NEWS_GET_QUERY = (q) =>
    `https://newsapi.org/v2/everything?language=fr&q=${q}&apiKey=${API_KEY}`;

const News = () => {
    const [listNews, setListNews] = useState([]);
    const [query, setQuery] = useState("");
    const [queryError, setQueryError] = useState("");

    function handleQuery(text) {
        setQuery(text);
        setQueryError("");
    }

    function search() {
        if (query.length > 1) {
            axios.get(NEWS_GET_QUERY(query)).then((reponse) => {
                setListNews(reponse.data.articles);
            });
        } else {
            setQueryError("Veuillez entrer un mot clé...");
        }
    }

    useEffect(() => {
        axios.get(NEWS_GET_TOP_HEADLINES).then((reponse) => {
            setListNews(reponse.data.articles);
        });
    }, []);

    async function go_to_page(url) {
        await WebBrowser.openBrowserAsync(url);
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "80%",
                    justifyContent: "space-between",
                }}
            >
                <InputWithError
                    holder={"Chercher..."}
                    valeur={query}
                    action={handleQuery}
                    errorMessage={queryError}
                    type='default'
                />
                <TouchableOpacity onPress={search}>
                    <AntDesign name='search1' size={30} color='black' />
                </TouchableOpacity>
            </View>
            {listNews.map((article) => {
                return (
                    <View style={styles.articleContainer}>
                        <Text>
                            {article.title}
                        </Text>
                        <Text >
                            {article.description}
                        </Text>
                        <Image
                            style={{ width: "100%", height: 300 }}
                            source={{ uri: article.urlToImage }}
                        />
                        <Text>
                            {article.content}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            go_to_page(article.url);
                        }}>
                            Aller à {article.title}
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    articleContainer: {
        padding: 20,
        backgroundColor: "rgb(220,220,220)",
        marginVertical: 30,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "rgb(220,220,220)",
        maxWidth: 700,
    },
    container: {
        alignItems: "center",
    },
});
export default News;