import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../../components/Layout";

const { width } = Dimensions.get("window");

interface Slide {
  uri: string;
  caption: string;
  summary: string;
}

const slides: Slide[] = [
  {
    uri: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
    caption: "Misty mountains at sunrise",
    summary:
      "Experience the peaceful charm of misty mountains at dawn. Perfect for a morning hike or a soul-refreshing view. Nature’s calm wraps you in silence, serenity, and soft golden light.",
  },
  {
    uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    caption: "Quiet lakeside pier",
    summary:
      "A hidden lakeside treasure where time stands still. Sit by the wooden pier, feel the breeze, and watch reflections ripple across calm waters — an ideal place for journaling or solitude.",
  },
  {
    uri: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=1400&q=80",
    caption: "Forest trail in autumn",
    summary:
      "Wander down the orange-blushed path where leaves crunch beneath your feet. This autumn trail offers stunning colors, crisp air, and a deep connection with the earth’s seasonal rhythm.",
  },
];

export default function HomeScreen() {
  const [index, setIndex] = useState<number>(0);
  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <Layout title="BLOG APP">
      <SafeAreaView style={styles.container}>
        {/* Image with icons */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: slides[index].uri }} style={styles.image} />

          <TouchableOpacity style={styles.leftIcon} onPress={prev}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIcon} onPress={next}>
            <Ionicons name="chevron-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Caption + summary */}
        <Text style={styles.caption}>{slides[index].caption}</Text>
        <Text style={styles.summary}>{slides[index].summary}</Text>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    position: "relative",
    marginBottom: 16,
  },
  image: {
    width: width - 32,
    height: 250,
    borderRadius: 16,
  },
  leftIcon: {
    position: "absolute",
    top: "45%",
    left: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 6,
  },
  rightIcon: {
    position: "absolute",
    top: "45%",
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 6,
  },
  caption: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
    color: "#333",
  },
  summary: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 8,
    color: "#555",
    lineHeight: 22,
  },
});
