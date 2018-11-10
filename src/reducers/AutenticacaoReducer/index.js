const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false
}

import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    LOGIN_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
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
                    return { ...state, erroCadastro: 'A senha precisa ter no mínimo 6 caracteres!!', loading_cadastro: false }
                case 'auth/email-already-in-use':
                    return { ...state, erroCadastro: 'Email existente!!', loading_cadastro: false }
                default:
                    return state;
            }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loading_cadastro: false }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loading_login: false }
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loading_login: true }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loading_cadastro: true }
        default:
            return state;
    }

}