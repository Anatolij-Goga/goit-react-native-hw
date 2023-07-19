import { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { styles } from "./RegistrationScreen.styled";

import BackgroundImage from "../../../assets/images/image-background-375x812.jpg";
import GirlImage from "../../../assets/images/avatar-photo-120x120.png";
import CrossSvg from "../../../assets/images/CrossSvg";

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;

      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);

    return () => subscription?.remove();
  }, []);

  const showKeyboard = () => {
    setIsShowKeyboard(true);
  };

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    hideKeyboard();

    console.log("Credentials", `${login} + ${password} + ${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={BackgroundImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.whiteWall}>
              <ImageBackground
                style={styles.girlImage}
                source={GirlImage}
                transform={[{ translateX: -60 }]}
              >
                <View style={styles.crossImage}>
                  <CrossSvg />
                </View>
              </ImageBackground>
              <Text style={styles.title}>Реєстрація</Text>
              <View
                style={{
                  marginBottom: isShowKeyboard ? 32 : 78,
                  width: dimensions,
                }}
              >
                <View style={{ marginTop: 32 }}>
                  <TextInput
                    style={{ ...styles.input }}
                    placeholder="Логін"
                    onFocus={showKeyboard}
                    onBlur={hideKeyboard}
                    value={name}
                    onChangeText={setName}
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    onFocus={showKeyboard}
                    onBlur={hideKeyboard}
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    onFocus={showKeyboard}
                    onBlur={hideKeyboard}
                    value={password}
                    maxLength={20}
                    onChangeText={setPassword}
                  />
                  <Text style={styles.showPassword}>Показати</Text>
                </View>

                <TouchableOpacity
                  style={{
                    ...styles.button,
                    display: isShowKeyboard ? "none" : "flex",
                  }}
                  activeOpacity={0.8}
                  onPress={onSubmit}
                >
                  <Text style={styles.buttonTitle}>Зареєстуватися</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 16, alignSelf: "center" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text
                    style={{
                      ...styles.toLoginLink,
                      display: isShowKeyboard ? "none" : "flex",
                    }}
                  >
                    Вже є акаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
