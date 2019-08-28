import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Gestures from 'react-native-easy-gestures';
import Draggable from '../../draggable/Draggable';
import Selectable from '../../selectable/Selectable';

class Canvas extends Component {

    render () {
        const { value, style, onChange, children } = this.props;

        return (
            <View style={{ height: style.height, width: '100%', position: 'relative', alignItems: 'center' }}>
                <View
                    style={{
                        position: 'absolute',
                        width: '100%',
                        backgroundColor: 'white',
                        overflow: 'hidden',
                        ...style
                    }}
                >
                    {children}
                </View>
            </View>
        );
    }
}

export default Canvas;
