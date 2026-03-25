import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperar Senha</Text>

        <Text style={styles.subtitle}>
          Insira seu e-mail para receber o código de verificação.
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="email@email.com" 
          keyboardType="email-address"
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("ResetPassword" as any)} // Ajuste o nome da rota se necessário
        >
          <Text style={styles.buttonText}>Enviar Código</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={[styles.link, { textAlign: "center" }]}>Voltar para o Login</Text>
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
  link: { color: "#4A80F0" },
  label: { marginTop: 10 },
  input: { backgroundColor: "#f2f2f2", borderRadius: 10, padding: 10, marginTop: 5 },
  button: { backgroundColor: "#4A80F0", padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { textAlign: "center", color: "#fff", fontWeight: "bold" },
});