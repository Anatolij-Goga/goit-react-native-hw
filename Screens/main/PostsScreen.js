import React from "react";

import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Post screen</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
