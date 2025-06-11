/* login.tsx */
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Layout from "../../components/Layout";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <Layout title="Log In" >
      <View style={styles.form}>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput placeholder="Password" value={pwd} onChangeText={setPwd} style={styles.input} secureTextEntry/>
        <Button title="Log In" onPress={() => router.replace("/(tabs)/home")} />
        <Button title="Go to Sign-Up" onPress={() => router.push("/accounts/signup")} />
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  form: { gap: 12 },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 8, padding: 12 },
});
