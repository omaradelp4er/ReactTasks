import React from "react";
import { useHistory } from "react-router-dom";
import { View, Button } from "react-native-web";

function Homescreen() {
  let history = useHistory();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <h1> Welcome to Homescreen </h1>
      <Button title="details" onPress={() => history.push("Details")} />
    </View>
  );
}

export default Homescreen;
