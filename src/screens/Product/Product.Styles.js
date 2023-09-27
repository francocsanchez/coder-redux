import { StyleSheet } from "react-native";

import { colors } from "../../global/Styles";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#384E77",
    marginBottom: 5,
  },
  brand: {
    fontSize: 16,
    color: "#8BBEB2",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#24c0eb",
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: "#24c0eb",
    marginBottom: 5,
  },
  stock: {
    fontSize: 16,
    color: "#24c0eb",
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: "#24c0eb",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#384E77",
    marginBottom: 10,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  gridImage: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export { styles };
