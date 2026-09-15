import { login } from "@/src/store/slices/auth-slice";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";

export const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async () => {
    setUsernameError("");
    setPasswordError("");
    setLoginError("");

    if (!username) {
      setUsernameError("Campo obrigatório");
    }

    if (!password) {
      setPasswordError("Campo obrigatório");
    }

    if (!username || !password) {
      return;
    }

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });

      dispatch(login());

      router.replace("/");
    } catch (error) {
      setLoginError("Username ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBlue} />
      <View style={styles.backgroundWhite} />

      <Text style={styles.title}>Bem-vindo de volta!</Text>

      <Text style={styles.subtitle}>
        Insira seus dados para entrar na sua conta.
      </Text>

      <View style={styles.loginContainer}>
        <View style={styles.loginContent}>
          {loginError && <Text style={styles.loginError}>{loginError}</Text>}

          <Text style={styles.loginTitle}>Username</Text>
          <TextInput
            style={[styles.textInput, usernameError && styles.textInputError]}
            value={username}
            onChangeText={setUsername}
          />

          {usernameError && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error-outline" size={16} color="#bc2626" />
              <Text style={styles.errorText}>{usernameError}</Text>
            </View>
          )}

          <Text style={styles.loginTitle}>Senha</Text>
          <TextInput
            style={[styles.textInput, passwordError && styles.textInputError]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {passwordError && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error-outline" size={16} color="#bc2626" />
              <Text style={styles.errorText}>{passwordError}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
