const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}

import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO
} from '../../actions/Types';

export default (state = INITIAL_STATE, action) => {
    console.log(`Action ${action}`);

    switch (action.type) {
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case CADASTRO_USUARIO_ERRO:
            switch (action.payload.code) {
                case 'auth/weak-password':
                    return { ...state, erroCadastro: 'A senha precisa ter no mínimo 6 caracteres!!' }
                case 'auth/email-already-in-use':
                    return { ...state, erroCadastro: 'Email existente!!' }
                default:
                    return state;
            }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '' }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload }
        default:
            return state;
    }

}