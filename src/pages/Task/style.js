import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        color: "black"
    },
    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    deleteTask: {
        justifyContent: "center",
        paddingLeft: 15,
    },
    descriptionTask: {
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#EAEAEA",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#181818",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold",
    },
    test: {
        color: "black"
    }
    
})

export default styles