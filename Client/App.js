import React from "react";
import { View, StyleSheet } from "react-native";
import Navigation from "./src/components/navigation";

const App = () => {
  return (
    <View style={ styles.container }>
      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FBFC',
    flex: 1,
  }
})

export default App;