import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#24c0eb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#24c0eb",
  },
});
