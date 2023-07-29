import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./LoginScreen.styled";

import useKeyboardStatus from "../../../hooks/keyboardStatus";
import { authSignIn } from "../../../redux/auth/authOperations";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [keyboardStatus] = useKeyboardStatus(Keyboard);

  const fokusToggle = (type) => {
    if (type === "email") return setFocusEmail(!focusEmail);
    if (type === "password") return setFocusPassword(!focusPassword);
  };

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    dispatch(authSignIn(data));

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
            style={{ ...styles.form, marginBottom: keyboardStatus ? -241 : 0 }}
          >
            <Text style={styles.title}>Увійти</Text>

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

            <View style={styles.containerPasword}>
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
                style={styles.showPass}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.textBtn}>Показати</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={{ ...styles.textBtn, color: "#fff" }}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.textBtn}>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
