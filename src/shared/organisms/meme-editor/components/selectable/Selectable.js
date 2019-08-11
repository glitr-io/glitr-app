import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

class Selectable extends Component {
    state = {
        isSelected: false
    }

    render () {
        const {
            isSelected,
            onPress,
            onLongPress,
            children
        } = this.props;

        return (
            <View style={{
                borderColor: 'purple',
                borderWidth: (!!isSelected ? 1 : 0),
                margin: (!!isSelected ? -1 : 0),
                borderStyle: 'dashed',
            }}>
                <TouchableWithoutFeedback
                    onPress={() => this.setState({ isSelected: !isSelected}, () => !!onPress && onPress())}
                    onLongPress={() => !!onLongPress && onLongPress()}
                    style={{ flex: 1 }}
                >
                    <View>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default Selectable;
