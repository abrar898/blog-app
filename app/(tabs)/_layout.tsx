import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1e90ff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ title: "Home" /* tab icon can be added later */ }}
      />
    </Tabs>
  );
}
