/* signup.tsx */
import React, { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";
import Layout from "../../components/Layout";
import { router } from "expo-router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <Layout title="Create Account" >
      <View style={styles.form}>
        <TextInput placeholder="Name"  value={name}  onChangeText={setName}  style={styles.input}/>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
        <TextInput placeholder="Password" value={pwd} onChangeText={setPwd} style={styles.input} secureTextEntry/>
        <Button title="Sign Up" onPress={() => router.replace("/accounts/login")} />
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  form: { gap: 12 },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 8, padding: 12 },
});
