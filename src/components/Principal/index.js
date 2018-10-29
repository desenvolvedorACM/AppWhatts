import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    }
});

const { container } = styles;

const Principal = props => (
    <View style={container}>
        <Text>Página principal da aplicação</Text>
    </View>
);

export default Principal;