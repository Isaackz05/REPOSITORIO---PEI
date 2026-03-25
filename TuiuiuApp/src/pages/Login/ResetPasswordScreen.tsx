import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ResetPasswordScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Nova Senha</Text>
        <Text style={styles.subtitle}>Crie uma nova senha para sua conta.</Text>

        <Text style={styles.label}>Código de Verificação</Text>
        <TextInput style={styles.input} placeholder="000000" keyboardType="numeric" />

        <Text style={styles.label}>Nova Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!passwordVisible}
            placeholder="******"
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="#888" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar Nova Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!passwordVisible}
            placeholder="******"
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => alert("Senha alterada com sucesso!")}
        >
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4A80F0", justifyContent: "center", padding: 20 },
  card: { backgroundColor: "#fff", borderRadius: 20, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  subtitle: { textAlign: "center", marginBottom: 20, color: "#666" },
  label: { marginTop: 10 },
  input: { backgroundColor: "#f2f2f2", borderRadius: 10, padding: 10, marginTop: 5 },
  passwordContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#f2f2f2", borderRadius: 10, paddingHorizontal: 10, marginTop: 5 },
  passwordInput: { flex: 1, padding: 10 },
  button: { backgroundColor: "#4A80F0", padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { textAlign: "center", color: "#fff", fontWeight: "bold" },
});