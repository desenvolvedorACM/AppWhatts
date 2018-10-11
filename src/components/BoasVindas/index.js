import React from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const imageBg = require('../../imgs/bg.png');
const imageLogo = require('../../imgs/logo.png');

const styles = StyleSheet.create({
    contentLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleLogo: {
        fontSize: 25,
        color: '#ffffff'
    }
});

const { contentLogo, titleLogo } = styles;


export default props => (
    <ImageBackground style={{ width: '100%', height: '100%' }} source={imageBg}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={ contentLogo }>
                <Text style={titleLogo}>Seja Bem-Vindo</Text>
                <Image source={imageLogo} />
            </View>
            <View style={{ flex: 2 }}>
                <Button title="Fazer Login" onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </ImageBackground>
);
