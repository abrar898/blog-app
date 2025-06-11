import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* The nested navigators (tabs, accounts) will slot in here automatically */}
    </Stack>
  );
}
