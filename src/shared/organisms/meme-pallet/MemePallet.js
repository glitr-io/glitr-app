import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
    Container,
    Content,
    Text,
    Button,
    List,
    ListItem,
    Item,
    Label,
    Input,
    Icon
} from 'native-base';
import PalletItem from './pallet-items/PalletItem';

const MemePallet = ({
    memeItems = [],
    onUpdate
}) => {
    const selectedIndex = memeItems
        .findIndex(memeItem => !!memeItem.isFocused);
    const selectedEditorIndex = selectedIndex > -1 ? selectedIndex : 0;
    // return (<Text>hello world</Text>);
    return (
        <PalletItem
            {...memeItems[selectedEditorIndex]}
            template={memeItems[selectedEditorIndex].type}
            onUpdate={update => onUpdate(
                memeItems
                    .map((memeItem, index) => index === selectedEditorIndex
                        ? { ...memeItem, ...update }
                        : memeItem
                    )
            )}
            onRemove={() => onUpdate(
                memeItems
                    .filter((_, index) => index !== selectedEditorIndex)
            )}
         />
    );
}

MemePallet.propTypes = {
    memeItems: PropTypes.array.isRequired
};

export default MemePallet;
