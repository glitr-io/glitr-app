import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, CameraRoll, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import {
    ListItem,
    Icon,
    Button,
    Tabs,
    Tab
} from 'native-base';
import { ImagePicker } from 'expo';
import * as Permissions from 'expo-permissions'
import Carousel from 'react-native-snap-carousel';
import SquaredCircle from '../../../../atoms/SquaredCircle';
import InputControl from '../../../input-controls/InputControl';


class BackgroundImage extends Component {
    render() {
        const {
            value,
            index,
            onUpdate
        } = this.props;

        const SIZE = 60;

        return (
            <View style={{ flex: 1 }}>
                <Tabs locked tabBarPosition="bottom">
                    <Tab heading="value" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingVertical: 10, backgroundColor: '#eee' }}>
                        <InputControl
                            type="imagePicker"
                            defaultValue={value}
                            config={{ size: 70 }}
                            onChange={newVal => onUpdate({ value: newVal })}
                        />
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

BackgroundImage.propTypes = {
    value: PropTypes.string.isRequired,
    // setCanvasSize: PropTypes.func.isRequired
    // height: PropTypes.number,
    // width: PropTypes.number.isRequired
};

// BackgroundImage.defaultProps = {
//     height: null
// };

export default BackgroundImage;
