import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerProduct: {
    width: "44%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b6b6b6",
    marginTop: 24,
  },

  containerImage: {
    borderBottomWidth: 1,
    borderBottomColor: "#b6b6b6",
    marginBottom: 10,
  },

  productImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    alignSelf: "center",
  },

  containerInfo: {
    paddingHorizontal: 13,
  },

  productName: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 6,
    minHeight: 48,
  },

  productDescription: {
    fontSize: 11,
    marginBottom: 12,
    color: "#555555",
  },

  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  productOldPrice: {
    fontSize: 11,
    color: "#555555",
    textDecorationLine: "line-through",
    marginLeft: 6,
    marginTop: 2,
    fontWeight: "600",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
});
