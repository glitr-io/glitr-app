import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, CameraRoll, Dimensions, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import * as ImgPicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Carousel from 'react-native-snap-carousel';
import SquaredCircle from '../../../atoms/SquaredCircle';

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [
                { type: 'color', value: '#000000' },
                { type: 'color', value: '#FFFFFF' },
                { type: 'color', value: '#f44336' },
                { type: 'color', value: '#E91E63' },
                { type: 'color', value: '#9C27B0' },
                { type: 'color', value: '#673AB7' },
                { type: 'color', value: '#3F51B5' },
                { type: 'color', value: '#2196F3' },
                { type: 'color', value: '#03A9F4' },
                { type: 'color', value: '#00BCD4' },
                { type: 'color', value: '#009688' },
                { type: 'color', value: '#4CAF50' },
                { type: 'color', value: '#8BC34A' },
                { type: 'color', value: '#CDDC39' },
                { type: 'color', value: '#FFEB3B' },
                { type: 'color', value: '#FFC107' },
                { type: 'color', value: '#FF9800' },
                { type: 'color', value: '#FF5722' },
                { type: 'color', value: '#795548' },
                { type: 'color', value: '#9E9E9E' },
                { type: 'color', value: '#607D8B' }
            ]
        };
    }

    render() {
        const {
            value,
            onChange,
            config: {
                size
            }
        } = this.props;

        const { colors } = this.state;

        const colorPalette = colors.map(color => ({ ...color, selected: value === color.value }))
        
        return (
            <View>
                <Carousel
                    data={[...colorPalette]}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={size*1.5}
                    enableSnap={false}
                    renderItem={({ item }) => {
                        return !!item.type === 'colorPicker'
                            ? (
                                <TouchableOpacity onPress={() => onChange(item.image.uri)} style={{ marginHorizontal: size*0.25 }}>
                                    <SquaredCircle size={size}>
                                        <Icon name='md-camera' style={{ color: 'black' }} />
                                    </SquaredCircle>
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity onPress={() => onChange(item.value)} style={{ marginHorizontal: size*0.25 }}>
                                    <SquaredCircle size={size} style={{ backgroundColor: item.value, borderWidth: (!!item.selected ? 5 : (item.value === '#FFFFFF' ? 1 : 0)), borderColor: '#65318f' }} >
                                        {!!item.selected && (<Icon name='md-checkmark' style={{ color: '#65318f' }} />)}
                                    </SquaredCircle>
                                </TouchableOpacity>
                            )
                    }}
                />
            </View>
        );
    }
}

ColorPicker.propTypes = {
    value: PropTypes.object,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    config: PropTypes.shape({
        heading: PropTypes.string
    })
};

ColorPicker.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    config: {
        heading: undefined,
        placeholder: undefined
    }
};

export default ColorPicker;
