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

import { useDispatch } from "react-redux";

import { styles } from "./RegistrationScreen.styled";

import useKeyboardStatus from "../../../hooks/keyboardStatus";
import { authSignUp } from "../../../redux/auth/authOperations";

export default function RegistrationScreen({ navigation }) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [keyboardStatus] = useKeyboardStatus(Keyboard);
  const [avatar, setAvatar] = useState(true);

  const fokusToggle = (type) => {
    if (type === "nickname") return setFocusName(!focusName);
    if (type === "email") return setFocusEmail(!focusEmail);
    if (type === "password") return setFocusPassword(!focusPassword);
  };

  const handleSubmit = () => {
    const data = {
      nickname,
      email,
      password,
    };
    dispatch(authSignUp(data));

    setNickname("");
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
              onChangeText={(text) => setNickname(text)}
              onFocus={() => fokusToggle("nickname")}
              onBlur={() => fokusToggle("nickname")}
              style={{
                ...styles.input,
                marginBottom: 16,
                borderColor: focusName ? "#FF6C00" : "#E8E8E8",
              }}
              value={nickname}
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
              <Text style={{ ...styles.textBtn, color: "#fff" }}>
                Зареєстуватися
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textBtn}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
