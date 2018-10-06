import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../../actions/AutenticacaoActions';

import { bindActionCreators } from 'redux';


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


class formCadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({nome, email, senha});
    }

    render() {
        console.log(`FormCadastro => Props.. ${this.props}`);

        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={ImageFundo}>
                <View style={container}>
                    <View style={containerCenter}>
                        <TextInput
                            value={this.props.nome}
                            placeholder="Nome"
                            placeholderTextColor='#fff'
                            style={textInput}
                            onChangeText={texto => this.props.modificaNome(texto)} />

                        <TextInput
                            value={this.props.email}
                            placeholder="E-mail"
                            placeholderTextColor='#fff'
                            style={textInput}
                            onChangeText={texto => this.props.modificaEmail(texto)} />

                        <TextInput secureTextEntry
                            value={this.props.senha}
                            placeholder="Senha"
                            placeholderTextColor='#fff'
                            style={textInput}
                            onChangeText={texto => this.props.modificaSenha(texto)} />
                    </View>
                    <View style={containerButton}>
                        <Button title="Cadastrar" color="#115E54" onPress={() => this._cadastraUsuario() } />
                    </View>
                </View>
            </ImageBackground>
        );
    }
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


export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
})
    (formCadastro);
