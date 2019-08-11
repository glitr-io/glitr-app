import React from 'react';
import { View } from 'react-native';
import Tag from '../atoms/Tag';

const Tags = ({ tags = [] }) => (
    <View style={{ display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
        ))}
    </View>
);

export default Tags;
