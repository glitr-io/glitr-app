import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import ScaledImage from '../../../../atoms/ScaledImage';

class BackgroundImage extends Component {
    render() {
        const {
            value,
            height,
            width,
            onSelect,
            isFocused
        } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={() => onSelect('back ground image')}
            >
                <ScaledImage
                    source={{ uri: value }}
                    style={{
                        width: '100%',
                        height: 200,
                        opacity: isFocused ? 1 : 0.5
                    }}
                    resizeMethod="scale"
                />
            </TouchableWithoutFeedback>
        );
    }
}

BackgroundImage.propTypes = {
    value: PropTypes.string.isRequired,
};

export default BackgroundImage;
