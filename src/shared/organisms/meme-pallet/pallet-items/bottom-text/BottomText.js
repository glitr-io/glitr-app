import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import {
    ListItem,
    Form,
    Item,
    Label,
    Input,
    Content,
    Tabs,
    Tab
} from 'native-base';
import InputControl from '../../../input-controls/InputControl';

const BottomText = ({
    value,
    style,
    color,
    onUpdate,
    onRemove
}) => (
    <View style={{ flex: 1 }}>
        <Tabs locked tabBarPosition="bottom">
            <Tab heading="value" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#eee' }}>
                <InputControl
                    type="text"
                    defaultValue={value}
                    config={{ placeholder: 'Text at the bottom...'}}
                    onChange={newVal => onUpdate({ value: newVal })}
                />
            </Tab>
            <Tab heading="size" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#eee' }}>
                <InputControl
                    type="slider"
                    value={(style.transform || [{ scale: 1 }])
                        .find(trans => (typeof trans.scale !== 'undefined'))
                    }
                    config={{
                        min: 1,
                        max: 4,
                        step: 0.000001
                    }}
                    onChange={newVal => onUpdate({
                        style: {
                            ...style,
                            transform: (style.transform || [])
                                .map(trans => (!!trans.scale
                                    ? {
                                        scale: newVal
                                    }
                                    : trans
                                ))
                        }
                    })}
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
            <Tab heading="config" tabStyle={{ backgroundColor: '#65318f' }} activeTabStyle={{ backgroundColor: '#65318f' }} style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingVertical: 10, backgroundColor: '#eee' }}>
                <InputControl
                    type="configPicker"
                    config={{ size: 70 }}
                    value={color}
                    onChange={newVal => onUpdate({ color: newVal })}
                    onRemove={onRemove}
                />
            </Tab>
        </Tabs>
    </View>
);

BottomText.propTypes = {
    value: PropTypes.string.isRequired,
    style: PropTypes.number.isRequired,
    isFocused: PropTypes.bool
};

BottomText.defaultProps = {
    isFocused: false
};

export default BottomText;
