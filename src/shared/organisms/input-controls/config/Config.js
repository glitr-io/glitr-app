import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, CameraRoll, Dimensions, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import * as ImgPicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SquaredCircle from '../../../atoms/SquaredCircle';
import ScaledImage from '../../../atoms/ScaledImage';
import RightArrowIcon from '../../../images/right-arrow.png';
import { updateMemeItems } from '../../../../redux/meme-editor/memeEditorActions';

class Config extends Component {

    render() {
        const {
            // navigation,
            updateMemeItems,
            onChange,
            onRemove,
            config: {
                size,
            },
        } = this.props;

        const dataList = [
            { icon: 'md-trash', action: () => onRemove() }
        ];

        const configPicker = (<Carousel
            data={dataList}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={size*1.5}
            enableSnap={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => item.action()}
                        style={{ marginHorizontal: size*0.25 }}
                    >
                        <SquaredCircle size={size}style={{ backgroundColor: '#65318f' }} >
                            <Icon name={item.icon} style={{ color: 'white' }} />
                        </SquaredCircle>
                    </TouchableOpacity>
                );
            }}
        />);

        return (
            <View>
                <View style={{ position: 'relative', backgroundColor: '#eee', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                   {configPicker}
                </View>
            </View>
        );
    }
}

Config.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    config: PropTypes.shape({
        heading: PropTypes.string
    })
};

Config.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    config: {
        heading: undefined,
        placeholder: undefined
    }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMemeItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Config));
