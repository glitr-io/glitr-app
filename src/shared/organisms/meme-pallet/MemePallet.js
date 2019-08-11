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

const EditPanel = ({
    memeItems = [],
    onUpdate
}) => {
    const selectedEditorIndex = memeItems
        .findIndex(memeItem => !!memeItem.isFocused);
    return (
        <PalletItem
            {...memeItems[selectedEditorIndex]}
            template={memeItems[selectedEditorIndex].template}
            onUpdate={update => onUpdate(
                memeItems
                    .map((memeItem, index) => index === selectedEditorIndex
                        ? { ...memeItem, ...update }
                        : memeItem
                    )
            )}
         />
    );
}

EditPanel.propTypes = {
    memeItems: PropTypes.array.isRequired
};

export default EditPanel;
