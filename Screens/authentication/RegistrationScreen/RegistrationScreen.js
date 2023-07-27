import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import useKeyboardStatus from "../../../hooks/keyboardStatus";

import { styles } from "./RegistrationScreen.styled";

export default function RegistrationScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [keyboardStatus] = useKeyboardStatus(Keyboard);
  const [avatar, setAvatar] = useState(true);

  const fokusToggle = (type) => {
    if (type === "name") return setFocusName(!focusName);
    if (type === "email") return setFocusEmail(!focusEmail);
    if (type === "password") return setFocusPassword(!focusPassword);
  };

  const handalSubmit = () => {
    const data = {
      name,
      email,
      password,
    };
    console.log(data);

    setName("");
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "margin"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/images/image-background-375x812.jpg")}
            style={styles.image}
          ></ImageBackground>
          <View
            style={{ ...styles.form, marginBottom: keyboardStatus ? -175 : 0 }}
          >
            <View style={styles.avatar}>
              <TouchableOpacity style={{ width: 25 }}>
                {avatar ? (
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/images/add.png")}
                  />
                ) : (
                  <Image
                    style={styles.icon}
                    source={require("../../../assets/images/delete.png")}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              inputmode="text"
              onChangeText={(text) => setName(text)}
              onFocus={() => fokusToggle("name")}
              onBlur={() => fokusToggle("name")}
              style={{
                ...styles.input,
                marginBottom: 16,
                borderColor: focusName ? "#FF6C00" : "#E8E8E8",
              }}
              value={name}
              placeholder="Логін"
            />
            <TextInput
              inputmode="email"
              onChangeText={(text) => setEmail(text)}
              onFocus={() => fokusToggle("email")}
              onBlur={() => fokusToggle("email")}
              style={{
                ...styles.input,
                marginBottom: 16,
                borderColor: focusEmail ? "#FF6C00" : "#E8E8E8",
              }}
              value={email}
              placeholder="Адреса електронної пошти"
            />

            <View style={styles.containerPassword}>
              <TextInput
                inputmode="text"
                secureTextEntry={showPassword}
                onFocus={() => fokusToggle("password")}
                onBlur={() => fokusToggle("password")}
                onChangeText={(text) => setPassword(text)}
                style={{
                  ...styles.input,
                  borderColor: focusPassword ? "#FF6C00" : "#E8E8E8",
                }}
                value={password}
                placeholder="Пароль"
              />
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.textButton}>Показати</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handalSubmit}
            >
              <Text style={{ ...styles.textButton, color: "#fff" }}>
                Зареєстуватися
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textButton}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
