import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>盧廣仲-音樂專輯</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#e3c95e",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 1000,
        paddingTop: 5,
        shadowColor: "red",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        // Android Only
        elevation: 2
    },
    textStyle: {
        fontSize: 20,
    },
});

export default Header;