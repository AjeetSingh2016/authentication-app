import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Define the screens with proper names */}
      <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up",  headerShown: false }} />
      <Stack.Screen name="home" options={{ title: "Home", headerShown: false  }} />
      <Stack.Screen name="welcome" options={{ title: "Welcome", headerShown: false  }} />
      <Stack.Screen
        name="index"
        options={{ title: "index", headerShown: false }}
      />
    </Stack>
  );
}
