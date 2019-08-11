import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import CommentsIcon from '../images/comment.png';

const CommentsButton = ({ count, onPress }) => (
    <Button transparent style={{ paddingHorizontal: 10 }} onPress={onPress} >
        <Image source={CommentsIcon} style={{ height: 15, width: 15 }} />
        {typeof count === 'number' && (<Text style={styles.text}>{count}</Text>)}
    </Button>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
        fontSize: 15,
        marginLeft: -10,
        paddingRight: 0
    }
});

export default CommentsButton;
