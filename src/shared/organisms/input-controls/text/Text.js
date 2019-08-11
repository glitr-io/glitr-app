import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Content, Input, Label, Item } from 'native-base';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            value,
            defaultValue,
            onChange,
            config: {
                heading,
                placeholder
            },
            ...rest
        } = this.props;

        return (
            <TextInput
                value={value}
                defaultValue={defaultValue}
                onChangeText={onChange}
                placeholder={placeholder}
                underlineColorAndroid="#FFFFFF"
                style={{ width: '100%', borderWidth: 1, borderRadius: 4, padding: 5, borderColor: '#65318f', textAlign: 'center', backgroundColor: '#fff', height: 50 }}
                {...rest}
            />
        );
    }
}

Text.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    config: PropTypes.shape({
        heading: PropTypes.string
    })
};

Text.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    config: {
        heading: undefined,
        placeholder: undefined
    }
};

export default Text;
