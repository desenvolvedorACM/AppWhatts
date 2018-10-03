const INITIAL_STATE = {
    nome: 'Alexandre',
    email: 'alexandreacm.marques@gmail.com',
    senha: 'teste'
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case 'modifica_mail':
            return { ...state, email: action.payload }
            break;
        case 'modifica_senha':
            return { ...state, senha: action.payload }
            break;
        default:
            return state;
            break;
    }


}