// app/index.tsx
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Home</Text>
    </SafeAreaView>
  );
}
