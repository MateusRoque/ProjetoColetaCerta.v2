import { Alert } from "react-native"

export default function formValidation(email, password, fullName, confirmPassword, cep, isSignUp = false) {
    const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (isSignUp) {
        if (fullName.trim() === "") {
            return Alert.alert("Nome inválido", "Informe um nome correto");
        }
        if (cep.trim().replace("-", "") === "") {
            return handleApi(cep);
        }
        if (password.trim().length < 6) {
            return Alert.alert("Senha inválida", "A senha deve possuir 6 ou mais caracteres");
        }
        if (confirmPassword.trim() !== password.trim()) {
            return Alert.alert("Senha inválida", "As senhas não batem");
        }
    }

    if (password.trim().length < 6) {
        return Alert.alert("Senha inválida", "A senha deve possuir 6 ou mais caracteres");
    }

    if (email.trim() === "" || !EMAIL.test(email.toLowerCase())) {
        return Alert.alert("E-mail inválido", "Informe um e-mail correto");
    }


    return true
}