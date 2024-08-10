import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    //padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  fullname: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
    color: "#666",
  },
  content: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginVertical: 16,
    width: "90%",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: "#444",
  },
  footer: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
  },
});

const stylesPractice = StyleSheet.create({
  /*Start of header style*/
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    width:'100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },

  /*Start of footer style*/
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  /*Start of content style*/
  content: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
export { styles, stylesPractice };