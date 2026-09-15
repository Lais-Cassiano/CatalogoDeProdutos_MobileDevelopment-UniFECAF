import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  containerTabs: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: "6%",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
  },

  tab: {
    position: "relative",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  tabsText: {
    fontSize: 14,
    fontWeight: "500",
  },

  activeTab: {
    position: "absolute",
    bottom: 0,
    height: 3,
    backgroundColor: "#2567e8",
    width: "100%",
  },

  containerTabsBottom: {
    flexDirection: "row",
    width: "100%",
    height: "8%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  tabBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBottomText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555555",
  },

  logoutButton: {
    width: "100%",
    backgroundColor: "#ff4d4d",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  logoutText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
