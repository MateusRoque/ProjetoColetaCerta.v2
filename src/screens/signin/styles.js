// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 40
//   },
//   signinContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   userContainer: {
//     width: "90%",
//     marginBottom: 20,
//     backgroundColor: "green",
//   },
//   emailContainer: {
//     width: "90%",
//     marginBottom: 20,
//     backgroundColor: "green",
//   },  
//   passwordContainer: {
//     flexDirection: "row",
//     width: "90%",
//     alignItems: 'center',
//     marginBottom: 20,
//     backgroundColor: "green",
//   },
//   cepContainer: {
//     flexDirection: "row",
//     width: "90%",
//     alignItems: 'center',
//     backgroundColor: "green",
//   },

//   input: {
//     width: '100%',
//     height: 40,
//     paddingHorizontal: 10,
//     padding: 8,
//     fontSize: 18,
//     color: "#FFFA"
//   },
//   inputPwd: {
//     width: '90%',
//     height: 40,
//     paddingHorizontal: 10,
//     padding: 8,
//     fontSize: 18,
//     color: "#FFFA"
//   },

//   iconEye: {
//     width: "10%",
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   homeButtonContainer: {
//     marginTop: 20,
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "green"
//   }
// })

// export default styles;]

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    formContainer: {
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
    iconEye: {
        position: "absolute",
        left: "90%"
    },
    logo: {
        flex: 1,
        height: 120,
        width: "31%",
        alignSelf: "center",
        margin: 20
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
        flex: 1,
        alignItems: "center",
        marginTop: 10
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