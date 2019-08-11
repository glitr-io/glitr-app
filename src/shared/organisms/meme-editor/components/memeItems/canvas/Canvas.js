import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Gestures from 'react-native-easy-gestures';
import Draggable from '../../draggable/Draggable';
import Selectable from '../../selectable/Selectable';

class Canvas extends Component {

    render () {
        const { value, style, onChange, children } = this.props;

        return (
            <View style={{ height: style.height + 100, width: '100%', position: 'relative', alignItems: 'center' }}>
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
        
                <Draggable
                    draggable={{
                        x: false,
                        y: true
                    }}
                    style={{ height: 50, width: 50, backgroundColor: 'lightblue', top: style.height }}
                    onStyle={style => {
                        onChange({ style: { height: style.top }});
                    }}
                >
                    <Text>up and down</Text>
                </Draggable>
            </View>
        );
    }
}

export default Canvas;
