import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { SwipeRow, Left, Right, Body, Button, Icon } from 'native-base';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import Indicator from '../atoms/Indicator';
import Chance from 'chance';

const chance = new Chance();

const ChatListItem = ({ navigation, data }) => (!!data &&
    <SwipeRow
        style={{ height: 90, paddingBottom: 0, paddingTop: 0, paddingRight: 0 }}
        leftOpenValue={100}
        rightOpenValue={-100}
        left={(
            <Button light onPress={() => navigation.navigate('ConversationSettings', { chatId: data.id })}>
                <Icon active name="settings" />
            </Button>
        )}
        body={(
            <TouchableOpacity onPress={() => navigation.navigate('Conversation', { groupId: data.id })} style={{ flex: 1 }}>
                <Grid style={{ height: 90, backgroundColor: '#fff', padding: 10 }}>
                    <Row>
                        <Col style={{ width: 90 }}>
                            <MultiAvatar
                                icons={[data.meta.groupIcon]}
                            />
                            {/* <Avatar icon={`http://thecatapi.com/api/images/get?format=src&type=png&size=small&salt=${chance.word({ syllables: 3 })}`} /> */}
                        </Col>
                        <Col>
                            <Grid style={{ paddingVertical: 10 }}>
                                <Row>
                                    <Col>
                                        <Text style={styles.text}>{data.meta.groupName}</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    {data.messages.length > 0 && (<Text style={styles.message}>{data.messages[data.messages.length - 1].sender}: 🖼️ sent a meme</Text>)}
                                </Row>
                            </Grid>
                        </Col>
                        <Col
                            style={{
                                alignContent: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40
                            }}
                        >
                            {data.messages.filter(msg => msg.isUnread === true).length > 0 && (<Indicator text={data.messages.filter(msg => msg.isUnread === true).length} />)}
                        </Col>
                    </Row>
                </Grid>
            </TouchableOpacity>
        )}
        right={(
            <Button light onPress={() => navigation.navigate('ConversationSettings', { chatId: data.id })}>
                <Icon active name="settings" />
            </Button>
        )}
    />
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
