import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableHighlight,
    ImageBackground,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
} from '../../actions/AutenticacaoActions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    containerTopo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 20,
        height: 45,
        color: '#FFF',
        marginVertical: 10
    },
    erroTextColor: {
        color: '#ff0000',
        fontSize: 18,
        alignItems: 'center',
    }
});


const { container, containerTopo, textInput, erroTextColor } = styles;
const imageFundo = require('../../imgs/bg.png');

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        //alert(`User: ${email} - Pass: ${senha}`);
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {

        if(this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
        )
    }

    render() {
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={imageFundo}>
                <View style={container}>
                    <View style={containerTopo}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp "Ela"</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput
                            value={this.props.email}
                            style={textInput}
                            placeholder='E-mail'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaEmail(texto)} />

                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            style={textInput}
                            placeholder='Senha'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaSenha(texto)} />

                        <View style={{ alignItems: 'center', padding: 12 }}>
                            <Text style={erroTextColor}>
                                {this.props.erroLogin}
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center', padding: 8 }}>
                            <TouchableHighlight onPress={() => Actions.formCadastro()}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastre-se</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);