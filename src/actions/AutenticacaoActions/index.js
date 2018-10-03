export const modificaEmail = (email) => {
  return  {
        type: 'modifica_mail',
        payload: email
    }
}

export const modificaSenha= (senha) => {
    return  {
          type: 'modifica_senha',
          payload: senha
      }
  }
  



