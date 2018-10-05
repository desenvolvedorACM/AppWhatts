import React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF',
    },
    containerCenter: {
        flex: 2,
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 20,
        height: 45
    },
    containerButton: {
        flex: 3,
        justifyContent: 'flex-start',
    }
});

const { container, containerCenter, containerButton, textInput } = styles;


const FormCadastro = props => {
    console.log(`Props.. ${props}`);

    return (
        <View style={container}>
            <View style={containerCenter}>
                <TextInput placeholder="Nome" style={textInput} />
                <TextInput placeholder="E-mail" style={textInput} />
                <TextInput placeholder="Senha" style={textInput} />
            </View>
            <View style={containerButton}>
                <Button title="Cadastrar" color="#115E54" onPress={() => false} />
            </View>
        </View>
    );
}


const mapStateToProps = (state) => ({
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    nome: state.AutenticacaoReducer.nome
});

export default connect(mapStateToProps, null)(FormCadastro);
