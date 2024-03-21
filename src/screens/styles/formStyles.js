import { StyleSheet } from 'react-native';
import colors from "../../colors/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: colors.white,

            // Sombra para Android
        elevation: 5,
        // Sombra para iOS
        shadowColor: colors.outroVerd,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexDirection: "row"
    },
    passwordContainer: {
        flexDirection: "row",
        width: "90%",
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 20
    },
    iconEye: {
        position: "absolute",
        left: "90%",
    },
    safe: {
        height: "100%",
        backgroundColor: colors.whiteF2  
    },

    logo: {
        flex: 1,
        width: "100%",
        height: "100%",
        color: colors.outroVerd,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 50
    },
    input: {
        height: 48,
        borderRadius: 5,
        width: "90%",
        marginLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.whiteF2,
        marginTop: 10,
        marginBottom: 10,
        // borderBottomWidth: 3,
        borderRadius: 30,
        fontSize: 16
        // borderColor: colors.outroVerd
    },
    inputPwd: {
        height: 48,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 40,
        backgroundColor: colors.whiteF2,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
        fontSize: 16
    },
    button: {
        backgroundColor: colors.outroVerd,
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: 50,
        marginBottom: 10,
        height: 48,
        borderRadius: 30,
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
        justifyContent: "center",
        borderTopColor: colors.light,
    },
    footerText: {
        fontSize: 15,
        color:"#2e2e2d"
    },
    footerLink: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 16
    }
})