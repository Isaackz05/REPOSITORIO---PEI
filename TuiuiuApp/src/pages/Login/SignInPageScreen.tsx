import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cadastre-se</Text>

        <Text style={styles.subtitle}>
          Já possui uma conta?{" "}
          <Text style={styles.link}>Entrar</Text>
        </Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} placeholder="Seu nome" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="email@email.com" />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} placeholder="00/00/0000" />

        <Text style={styles.label}>Número de Telefone</Text>
        <TextInput style={styles.input} placeholder="(65) 99999-9999" />

        <Text style={styles.label}>Definir Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!passwordVisible}
            placeholder="******"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A80F0",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    color: "#4A80F0",
  },
  label: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#4A80F0",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});