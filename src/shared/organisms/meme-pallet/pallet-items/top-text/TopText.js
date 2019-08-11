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
import { Permissions, ImagePicker } from 'expo';
import InputControl from '../../../input-controls/InputControl';

const TopText = ({
    value,
    scale,
    color,
    onUpdate
}) => (
    <View style={{ flex: 1 }}>
        <Tabs locked tabBarPosition="bottom">
            <Tab heading="value" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#eee' }}>
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
            </Tab>
            <Tab heading="color" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingVertical: 10, backgroundColor: '#eee' }}>
                <InputControl
                    type="colorPicker"
                    config={{ size: 70 }}
                    value={color}
                    onChange={newVal => onUpdate({ color: newVal })}
                />
            </Tab>
        </Tabs>
    </View>
);

TopText.propTypes = {
    value: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    isFocused: PropTypes.bool
};

TopText.defaultProps = {
    isFocused: false
};

export default TopText;
