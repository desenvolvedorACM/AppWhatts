import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../../actions/AutenticacaoActions';
//import { bindActionCreators } from 'redux';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF',
    },
    containerTopo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        fontSize: 20,
        height: 45
    }
});

const { container, containerTopo, textInput } = styles;


const FormLogin = (props) => {

    console.log(`props.. ${props}`);

    return (
        <View style={container}>
            <View style={containerTopo}>
                <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput style={textInput} placeholder='E-mail' value={props.email} onChangeText={(email) => props.modificaEmail(email)} />
                <TextInput style={textInput} placeholder='Senha' value={props.senha} onChangeText={(senha) => props.modificaSenha(senha)} />
                <TouchableHighlight
                    onPress={() => { Actions.frmCadastro() }}>
                    <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}>
                <Button title="Acessar" color='#115E54' onPress={() => false} />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
});


export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha
})(FormLogin);
