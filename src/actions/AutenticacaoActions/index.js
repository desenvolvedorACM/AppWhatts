import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

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
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email);
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch));
            })
            .catch(error => cadastroUsuarioErro(dispatch, error));
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'cadastra_usuario_sucesso' });
    Actions.boasVindas();
}

const cadastroUsuarioErro = (dispatch, error) => {
    dispatch({ type: 'erro', payload: error });
}

export const autenticarUsuario = ({ email, senha }) => {
    console.log(email);
    console.log(senha);

    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(user => {
                loginSuccess(dispatch);
            })
            .catch(error => {
                loginFail(dispatch, error);
            });
    }
}

const loginSuccess = (dispatch) => {
    dispatch({ type: 'loginSuccess' });
}

const loginFail= (dispatch, error) => {
    dispatch({ type: 'loginFail', payload: error.message });
}