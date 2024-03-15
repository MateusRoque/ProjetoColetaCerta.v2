import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  logo: {
    flex: 1,
    height: 120,
    width: "31%",
    alignSelf: "center",
    margin: 20
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginBottom: "20%", 
    flexDirection: "row"
  },
  passwordContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: 'center',
    marginLeft: 20

  },
  input: {
    height: 48,
    borderRadius: 5,
    width: "90%",
    marginLeft: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  inputPwd: {
    height: 48,
    borderRadius: 5,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
},

iconEye: {
  position: "absolute",
  left: "90%"
},
  homeButtonContainer: {
    padding: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: 'green',
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonTitle: {
      color: 'white',
      fontSize: 16,
      fontWeight: "bold"
  },
  footerView: {
      alignItems: "center",
      marginTop: 20
  },
  footerText: {
      fontSize: 16,
      color: '#2e2e2d'
  },
  footerLink: {
      color: "green",
      fontWeight: "bold",
      fontSize: 16
  }
})

export default styles;