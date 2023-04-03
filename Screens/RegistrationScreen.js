import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const mailHandler = (text) => setMail(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/backgroundphoto.jpg")}
        >
          <View style={styles.form}>
            <Text style={styles.inputTitle}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={{ marginTop: 32 }}>
                <TextInput
                  autoFocus
                  placeholder="Логін"
                  value={name}
                  onChangeText={nameHandler}
                  style={styles.input}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  value={password}
                  onChangeText={passwordHandler}
                  style={styles.input}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="Пароль"
                  secureTextEntry={true}
                  value={mail}
                  onChangeText={mailHandler}
                  style={styles.input}
                />
              </View>
              <View style={{ marginTop: 43 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonRegistration}
                  onPress={onLogin}
                >
                  <Text style={styles.buttonRegistrationTitle}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 16 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonLogin}
                  onPress={onLogin}
                >
                  <Text style={styles.buttonLoginTitle}>
                    Вже э аккаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    marginHorizontal: 16,
    backgroundColor: "FFFFFF",
  },
  inputTitle: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    color: "#212121",
    letterSpacing: 0.01,
    textAlign: "center",
    textTransform: "uppercase",
  },
  input: {
    fontFamily: "Roboto",
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  buttonRegistration: {
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRegistrationTitle: {
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 19,
    fontSize: 16,
    color: "#FFF",
  },
  buttonLogin: {
    width: 188,
    height: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLoginTitle: {
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
  },
});
