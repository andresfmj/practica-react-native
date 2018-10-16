import React from 'react';
import { Text } from 'react-native';

const header = () => {
    const { textStyles } = styles;

    return (
        <Text style={textStyles}>Albums!</Text>
    );
};

const styles = {
    textStyles: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 8
    }
};

export default header;
