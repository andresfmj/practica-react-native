import React from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';


const App = () => {
    const { outlineBox } = stylesCustom;

    return (
        <View style={outlineBox}>
            <Header />
            <Text>Aprendiendo React Native</Text>
        </View>
    );
};


const stylesCustom = {
    outlineBox: {
        display: 'flex',
        marginTop: 40,
        marginLeft: 8,
        marginRight: 8
    }
};


export default App;
