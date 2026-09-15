import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backButton: {
    marginVertical: 20,
    marginLeft: 12,
  },

  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    backgroundColor: "#f6f6f6",
  },

  containerInfo: {
    marginTop: 15,
    marginHorizontal: 24,
  },

  productName: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
  },

  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },

  productPrice: {
    fontSize: 25,
    color: "#b40000",
    fontWeight: "500",
  },

  productOldPrice: {
    fontSize: 16,
    color: "#555555",
    marginTop: 6,
    textDecorationLine: "line-through",
  },

  productDescription: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 20,
    color: "#555555",
  },
});
