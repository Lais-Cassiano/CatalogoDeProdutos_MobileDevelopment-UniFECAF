import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  backgroundBlue: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "#2567e8",
  },

  backgroundWhite: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 32,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    marginTop: 200,
  },

  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },

  loginContainer: {
    backgroundColor: "#fff",
    width: "90%",
    height: 350,
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b6b6b6",
  },

  loginContent: {
    width: "85%",
    alignSelf: "center",
    marginTop: 50,
  },

  loginTitle: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "500",
  },

  textInput: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
  },

  loginButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#2567e8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },

  loginError: {
    color: "#bc2626",
    fontSize: 16,
    marginBottom: 15,
    alignSelf: "center",
    fontWeight: "500",
  },

  errorText: {
    color: "#bc2626",
    fontSize: 13,
    fontWeight: "500",
  },

  textInputError: {
    borderColor: "#bc2626",
  },

  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: -12,
    marginBottom: 12,
  },
});
