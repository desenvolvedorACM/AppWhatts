import firebase from 'firebase';
import { ToastAndroid, AlertAndroid } from 'react-native';

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => {
            Sucesso();
            ToastAndroid.show('Usuário cadastrado com sucesso!!', ToastAndroid.SHORT);
        })
        .catch(error => Erro(error));
}

const Sucesso = () => {
    return {
        type: 'sucesso'
    }
}

const Erro = (error) => {
    //let errorCode = error.code;
    //let errorMessage = error.message;

    switch (error.code) {
        case 'auth/weak-password':
            alert('A senha precisa ter no mínimo 6 caracteres!!');
        case 'auth/email-already-in-use':
            alert('A senha precisa ter no mínimo 6 caracteres!!');
        default:
            alert(`Erro: ${error.code} `);
    }

}