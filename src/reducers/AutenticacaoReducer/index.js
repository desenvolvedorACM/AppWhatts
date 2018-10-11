const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
}


export default (state = INITIAL_STATE, action) => {

    console.log(`Action ${action.type}`);

    switch (action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'erro':
            switch (action.payload.code) {
                case 'auth/weak-password':
                    return { ...state, erroCadastro: 'A senha precisa ter no mínimo 6 caracteres!!' }
                case 'auth/email-already-in-use':
                    return { ...state, erroCadastro: 'Email existente!!' }
                default:
                    return state;
            }
        case 'cadastra_usuario_sucesso':
            return { ...state, nome: '', senha: '' }
        default:
            return state;
    }

}