import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f1ebeb",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
  },
  thumbnail: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#384E77",
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    color: "#384E77",
  },
  price: {
    fontSize: 14,
    fontWeight:'bold',
    marginBottom: 5,
    color: "#24c0eb",
  },
  stock: {
    fontSize: 14,
    marginBottom: 5,
    color: "#24c0eb",
  },
  brand: {
    fontSize: 14,
    color: "#8BBEB2",
  },
});

export { styles };
