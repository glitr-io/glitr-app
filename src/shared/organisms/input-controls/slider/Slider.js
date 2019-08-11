import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';
import { Content, Item, Label, Text } from 'native-base';

const RangeSlider = ({
    value,
    onChange,
    config: {
        heading,
        min,
        max
    }
}) => (
    <Slider
        value={value}
        minimumValue={min}
        maximumValue={max}
        step={1}
        onValueChange={onChange}
        style={{ width: '100%' }}
        minimumTrackTintColor="#65318f"
        thumbTintColor="#65318f"
        thumbTouchSize={{ height: 60, width: 60 }}
        thumbStyle={{ height: 30, width: 30, borderRadius: 15 }}
        trackStyle={{ height: 10 }}
    />
);

export default RangeSlider;
