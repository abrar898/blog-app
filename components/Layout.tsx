import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = "Travel Blog" }: Props) {
  const pathname = usePathname(); // For active tab detection

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
      }}
      style={styles.background}
    >
      {/* <SafeAreaView style={styles.root}> */}
        {/* ---- Header ---- */}
        <View style={styles.header}>
          <Text style={styles.headerTxt}>{title}</Text>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </View>

        {/* ---- Page Body ---- */}
        <View style={styles.body}>{children}</View>

        {/* ---- Bottom Navigation ---- */}
        <View style={styles.nav}>
          <Tab
            icon="home"
            isActive={pathname === "/" || pathname.startsWith("/home")}
            onPress={() => router.push("/")}
          />
          <Tab
            icon="log-in"
            isActive={pathname.startsWith("/login")}
            onPress={() => router.push("/accounts/login")}
          />
          <Tab
            icon="person-add"
            isActive={pathname.startsWith("/signup")}
            onPress={() => router.push("/accounts/signup")}
          />
        </View>
      {/* </SafeAreaView> */}
    </ImageBackground>
  );
}

function Tab({
  icon,
  isActive,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  isActive: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Ionicons
        name={isActive ? icon : `${icon}-outline`}
        size={26}
        color={isActive ? "#ff784f" : "#fff"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)" },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  headerTxt: { fontSize: 22, fontWeight: "700", color: "#fff" },
  body: { flex: 1 },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#333",
  },
  tab: { padding: 6 },
});
