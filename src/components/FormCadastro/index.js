import React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../../actions/AutenticacaoActions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerCenter: {
        flex: 4,
        justifyContent: 'center',
    },
    containerButton: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    textInput: {
        fontSize: 20,
        height: 45,
        color: '#FFF'
    },
});

const { container, containerCenter, containerButton, textInput } = styles;
const ImageFundo = require('../../imgs/bg.png');


const formCadastro = props => {
    console.log(`FormCadastro => Props.. ${props}`);

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={ImageFundo}>
            <View style={container}>
                <View style={containerCenter}>
                    <TextInput value={props.nome} placeholder="Nome" placeholderTextColor='#fff' style={{ fontSize: 20, height: 45, color: '#FFF' }} onChangeText={texto => props.modificaNome(texto)} />
                    <TextInput value={props.email} placeholder="E-mail" placeholderTextColor='#fff' style={{ fontSize: 20, height: 45, color: '#FFF' }} onChangeText={texto => props.modificaEmail(texto)} />
                    <TextInput secureTextEntry value={props.senha} placeholder="Senha" placeholderTextColor='#fff' style={{ fontSize: 20, height: 45, color: '#FFF' }} onChangeText={texto => props.modificaSenha(texto)} />
                </View>
                <View style={containerButton}>
                    <Button title="Cadastrar" color="#115E54" onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    );
}


const mapStateToProps = state => {
    console.log(state);

    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha
        }
    );
}

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);
