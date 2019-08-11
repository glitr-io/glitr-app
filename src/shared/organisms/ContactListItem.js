import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeRow, Left, Right, Body, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import Avatar from '../mulecules/Avatar';

const ChatListItem = ({ onPress, onLongPress, firstName = '', lastName = '', icon = '', selected, note }) => (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={{ flex: 1, backgroundColor: selected ? '#9e67cb' : '#fff' }}>
        <Grid style={{ height: 90, backgroundColor: selected ? '#9e67cb' : '#fff', padding: 10 }}>
            <Row>
                <Col style={{ width: 90 }}>
                    <Avatar icon={icon} name={`${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase()} />
                </Col>
                <Col>
                    <Grid>
                        <Row>
                            <Col style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={[{ color: selected ? '#fff' : '#000'}, styles.text]}>{firstName} {lastName}</Text>
                            </Col>
                            <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={styles.time}>{note}</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        </Grid>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
        fontSize: 20,
    },
    message: {
        fontFamily: 'campton_light',
        fontSize: 15,
        color: '#999'
    },
    time: {
        fontFamily: 'campton_semibold',
        fontSize: 10,
        color: '#999'
    },
    date: {
        fontFamily: 'campton_light',
        fontSize: 10,
        color: '#aaa'
    },
    centered: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default withNavigation(ChatListItem);
