import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={{
         uri: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
      }}
      style={styles.bg}
    >
      {/* dark → transparent gradient so text pops */}
      <LinearGradient
        colors={["rgba(0,0,0,0.65)", "rgba(0,0,0,0.05)", "transparent"]}
        style={styles.gradient}
      />

      <View style={styles.wrap}>
        <Text style={styles.bigTitle}>Find Your Next Journey</Text>
        <Text style={styles.subtitle}>
          Authentic stories & tips from real travellers
        </Text>

        <Link href="/(tabs)/home" asChild>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Explore Blog</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center" },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  wrap: {
    paddingHorizontal: 32,
    alignItems: "center",
  },
  bigTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    opacity: 0.9,
  },
  cta: {
    backgroundColor: "#ff784f",
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 30,
  },
  ctaText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
