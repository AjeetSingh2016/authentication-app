import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { getFromStorage } from "@/src/utils/storage";
import { useRouter } from "expo-router";

const Index = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkEmail = async () => {
      const savedEmail = await getFromStorage("userEmail");
      if (savedEmail) {
        router.replace("/welcome"); // Replace the current route
      } else {
        router.replace("/home"); // Replace the current route
      }
      setLoading(false);
    };

    checkEmail();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#00f" />
      <Text>Loading...</Text>
    </View>
  );
};

export default Index;
