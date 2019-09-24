import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import {
    ListItem,
    Form,
    Item,
    Label,
    Input,
    Button,
    Content,
    Tabs,
    Tab
} from 'native-base';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import InputControl from '../../../input-controls/InputControl';

const Canvas = ({
    value,
    style,
    color,
    onUpdate
}) => (
    <View style={{ flex: 1 }}>
        <Tabs locked tabBarPosition="bottom">
            {/* <Tab heading="value" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#eee' }}>
                <InputControl
                    type="text"
                    defaultValue={value}
                    config={{ placeholder: 'Text at the top...'}}
                    onChange={newVal => onUpdate({ value: newVal })}
                />
            </Tab>
            <Tab heading="size" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#eee' }}>
                <InputControl
                    type="slider"
                    value={scale}
                    config={{
                        min: 20,
                        max: 70
                    }}
                    onChange={newVal => onUpdate({ scale: newVal })}
                />
            </Tab> */}
            <Tab heading="color" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingVertical: 10, backgroundColor: '#eee' }}>
                <InputControl
                    type="colorPicker"
                    config={{ size: 70 }}
                    value={style}
                    onChange={newVal => onUpdate({ style: { ...style, backgroundColor: newVal } })}
                />
            </Tab>
        </Tabs>
    </View>
);

Canvas.propTypes = {
    value: PropTypes.string.isRequired,
    style: PropTypes.number.isRequired,
    isFocused: PropTypes.bool
};

Canvas.defaultProps = {
    isFocused: false
};

export default Canvas;
