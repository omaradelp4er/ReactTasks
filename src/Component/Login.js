import React, { useState, useEffect } from "react";
import { Text, View, Button, TextInput } from "react-native-web";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);
  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
      method: "Get",
    })
      .then((response) => response.json())
      .then((responsejson) => setdata(responsejson))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <View style={container}>
      <View>
        <Text>Email</Text>
        <TextInput
          style={textinput}
          value={email}
          onChangeText={(text) => {
            setemail(text);
          }}
        />
      </View>
      <View>
        <Text>password</Text>
        <TextInput
          style={textinput}
          value={password}
          onChangeText={(pass) => {
            setpassword(pass);
          }}
        />
      </View>
      <View>
        <Button
          title="Login"
          onPress={() => {
            var user = data.find((u) => u.email == email);
            if(user!=null){
              if (
                // eslint-disable-next-line eqeqeq
                email == user.email &&
                password == user.id
              ) {
                history.replace("/homescreen");
              } else {
                alert("wrong sucess");
              }
            }
            else{
              alert('user not found')
            }
           
          }}
        />
      </View>
    </View>
  );
}
const textinput = {
  borderColor: "black",
  width: 200,
  borderWidth: 1,
};
const container = {
  justifyContent: "center",
  alignItems: "center",
};

export default Login;
