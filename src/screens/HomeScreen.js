// src/screens/HomeScreen.js
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const HomeScreen = () => {
  const { user, logout } = useAuth();
  const { themeMode, colors, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        Welcome, {user.name} 👋
      </Text>
      <Text style={[styles.sub, { color: colors.text }]}>
        Current Theme: {themeMode}
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FF3B30" }]}
        onPress={logout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  sub: { fontSize: 16, marginBottom: 20 },
  button: { padding: 15, borderRadius: 10, marginBottom: 15 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default HomeScreen;
