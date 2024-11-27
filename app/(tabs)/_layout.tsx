import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash",
          tabBarIcon: () => <Ionicons name="home" size={30} />,
        }}
      />
      <Tabs.Screen name="about" options={{ headerTitle: "about" }} />
      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}
