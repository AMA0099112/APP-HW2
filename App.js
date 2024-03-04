import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text, ScrollView } from "react-native";
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <StatusBar />
      <Header />
      <Albumlist />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b49968"
  }
});

export default App;