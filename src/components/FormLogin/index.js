import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../../actions/AutenticacaoActions';
//import { bindActionCreators } from 'redux';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerTopo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        fontSize: 20,
        height: 45,
        color: '#FFF',
        marginVertical: 10,
    }
});

const { container, containerTopo, textInput } = styles;
const ImageFundo = require('../../imgs/bg.png');

const FormLogin = (props) => {

    console.log(`FormLogin => Props.. ${props}`);
    return (
        <ImageBackground source={ImageFundo} style={{ width: '100%', height: '100%' }}>
            <View style={container}>
                <View style={containerTopo}>
                    <Text style={{ fontSize: 25, color: '#FFF' }}>WhatsApp Fake</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput
                        style={textInput}
                        placeholder='Email'
                        placeholderTextColor='#FFF'
                        value={props.email}
                        onChangeText={(texto) => props.modificaEmail(texto)} />
                    <TextInput secureTextEntry
                        style={textInput}
                        placeholder='Senha'
                        placeholderTextColor='#FFF'
                        value={props.senha}
                        onChangeText={(texto) => props.modificaSenha(texto)} />
                    <TouchableHighlight
                        style={{ alignItems: 'center' }}
                        onPress={() => { Actions.frmCadastro() }}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>Ainda não tem cadastro? <Text style={{ fontWeight: '600', color: '#FFF' }}>Cadastre-se</Text></Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 2 }}>
                    <Button title="Acessar" color='#115E54' onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha
})(FormLogin);
