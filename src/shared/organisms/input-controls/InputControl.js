import React from 'react';
import PropTypes from 'prop-types';
import slider from './slider/Slider';
import text from './text/Text';
import imagePicker from './image-picker/ImagePicker';
import colorPicker from './color-picker/ColorPicker';
import configPicker from './config/Config';

const templateMapping = {
    slider,
    text,
    imagePicker,
    colorPicker,
    configPicker
};

const InputControl = (props) => {
    const Template = templateMapping[props.type];

    if (props.children && !props.editing) {
        return props.children;
    } else {
        return (<Template
            {...props}
        />);
    }
};

InputControl.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    debounce: PropTypes.number
};

InputControl.defaultProps = {
    value: null,
    defaultValue: null,
    config: {
        heading: 'null',
        min: null,
        max: null
    },
    debounce: null
};

export default InputControl;
