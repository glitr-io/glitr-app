import React from 'react';
import { Text } from 'react-native';

const Tag = ({ text }) => (
    <Text style={{ fontFamily: 'campton_semibold', padding: 5, backgroundColor: '#ddd', color: '#999', borderRadius: 20, paddingHorizontal: 10, marginRight: 5, marginTop: 5 }}>{text}</Text>
);

export default Tag;
