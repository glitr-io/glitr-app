import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import replyIcon from '../images/reply.png';

const ReplyButton = () => (
    <Button
        transparent
        style={{
            paddingHorizontal: 10
        }}
    >
        <Image source={replyIcon} style={{ height: 15, width: 15 }} />
        <Text style={styles.text}>Reply</Text>
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

export default ReplyButton;
