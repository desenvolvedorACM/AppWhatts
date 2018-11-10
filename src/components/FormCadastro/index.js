import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../../actions/AutenticacaoActions';

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        height: 45,
        color: '#FFF'
    }
});

const { textInput } = styles;

class formCadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button
                title="Cadastrar"
                color="#115E54"
                onPress={() => this._cadastraUsuario()}
            />
        )
    }

    render() {
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome}
                            placeholder="Nome"
                            placeholderTextColor='#fff'
                            style={textInput}
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            value={this.props.email}
                            placeholder="E-mail"
                            placeholderTextColor='#fff'
                            style={textInput}
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            placeholder="Senha"
                            placeholderTextColor='#fff'
                            style={textInput}
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro,
    }
);

export default connect(
    mapStateToProps,
    {
        modificaEmail,
        modificaSenha,
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);