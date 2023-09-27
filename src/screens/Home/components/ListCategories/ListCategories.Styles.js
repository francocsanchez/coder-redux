import { StyleSheet } from "react-native";

import { colors } from "../../../../global/Styles";

const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: colors.color6,
    borderWidth: 1,
  },
  categoryTitle: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
    color: "#5cceee",
    flex: 1,
  },
  iconContainer: {
    marginLeft: "auto",
  },
});

export { styles };
