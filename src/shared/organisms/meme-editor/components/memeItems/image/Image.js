import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Draggable from '../../draggable/Draggable';
import Selectable from '../../selectable/Selectable';

class ImageItem extends Component {

    componentDidMount() {
        Permissions.getAsync(Permissions.CAMERA_ROLL)
            .then(({ status }) => {
                if (status !== 'granted') {
                    Alert.alert(
                        'Device Gallery',
                        'Grant Glitr access to photos',
                        [
                            {
                                text: 'Ok',
                                onPress: () => Permissions
                                    .askAsync(Permissions.CAMERA_ROLL)
                                    .then(({ status }) => {
                                        if (status === 'granted') console.log('access granted')
                                    })
                            },
                            {text: 'cancel', onPress: () => console.log('ok2 pressed')}
                        ]
                    );
                }
                
            });
        Permissions.getAsync(Permissions.CAMERA)
            .then(({ status }) => {
                if (status !== 'granted') {
                    Alert.alert(
                        'Device Gallery',
                        'Grant Glitr access to the camera',
                        [
                            {
                                text: 'Ok',
                                onPress: () => Permissions
                                    .askAsync(Permissions.CAMERA)
                                    .then(({ status }) => {
                                        if (status === 'granted') console.log('access granted')
                                    })
                            },
                            {text: 'cancel', onPress: () => console.log('cancel pressed')}
                        ]
                    );
                }
                
            });
    }

    getImageFromDevice(type) {
        const { onChange } = this.props;
        if (type === 'camera') {
            ImagePicker.launchCameraAsync({ allowsEditing: true, base64: true })
                .then(result => {
                    if (!result.cancelled) {
                        onChange({ value: `data:image/jpeg;base64,${result.base64}` });
                    }
                }).catch(console.log);
        } else if (type === 'library') {
            ImagePicker.launchImageLibraryAsync({ allowsEditing: true, base64: true })
                .then(result => {
                    if (!result.cancelled) {
                        onChange({ value: `data:image/jpeg;base64,${result.base64}` });
                    }
                }).catch(console.log);
        }

    }

    render () {
        const { value, style, onChange } = this.props;

        return (
            <Draggable
                style={{
                    ...style,
                    position: 'absolute'
                }}
                onStyle={style => {
                    onChange({ style });
                }}
            >
                <Selectable
                    onPress={() => console.log('onPressed called')}
                    onLongPress={() => this.getImageFromDevice('library')}
                >
                    <Image
                        source={{ uri: value }}
                        style={{
                            width: 200,
                            height: 200
                        }}
                        resizeMode="contain"
                    />
                </Selectable>
            </Draggable>
        );
    }
}

export default ImageItem;
