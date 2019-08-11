import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { SwipeRow, Container, Content, Header, Left, Body, Right, Title, Button, Icon, List, ListItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import InputControl from '../organisms/input-controls/InputControl';
import ContactListItem from '../organisms/ContactListItem';
import InputWithDisplay from '../organisms/InputWithDisplay';
import SquaredCircle from '../atoms/SquaredCircle';
import ScaledImage from '../atoms/ScaledImage';

class ConversationSettings extends Component {
    constructor(props) {
        super(props)
        this.component = [];
        this.selectedRow;
    }

    state = {
        currentlyEditing: '',
        data: [{ key: 'a' }, { key: 'b' }]
    }

    render () {
        const {
            navigation,
            updateGroupName,
            updateGroupIcon,
            chats = [],
            contacts,
            accountId,
            addUsers,
            removeUser,
            addAdmin,
            removeAdmin,
            exitChat,
            deleteChat
        } = this.props;
        const {
            currentlyEditing
        } = this.state;

        const MIN_HEIGHT = 80;
        const chatId = navigation.getParam('chatId');
        const selectedChat = chats.find(chat => chat.id === chatId) || { meta: { users: [], admins: [] }};
        const groupMembers = selectedChat.meta.users
            .filter(userId => userId !== accountId)
            .map(userId => contacts
                .find(contact => contact.id === userId)
            );
        const isCurrntlyInChat = selectedChat.meta.admins.includes(accountId) || selectedChat.meta.users.includes(accountId)

        console.log('chatId to delete:', chatId);
    
        return (
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='md-arrow-round-back' style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>settings</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <InputWithDisplay
                        editable={groupMembers.length > 1}
                        editing={currentlyEditing === 'displayIcon'}
                        type="imagePicker"
                        defaultValue={selectedChat.meta.groupIcon}
                        config={{ size: 70, advanced: true }}
                        onChange={newVal => this.setState({ currentlyEditing: '' }, () => updateGroupIcon(chatId, newVal))}
                        onPressEdit={() => this.setState({ currentlyEditing: currentlyEditing === 'displayIcon' ? '' : 'displayIcon' })}
                    >
                        <Row style={styles.centered}>
                            <SquaredCircle size={200} style={{ margin: 20 }}>
                                <ScaledImage
                                    source={{ uri: selectedChat.meta.groupIcon }}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="cover"
                                />
                            </SquaredCircle>
                        </Row>
                    </InputWithDisplay>
                    <InputWithDisplay
                        editable={groupMembers.length > 1}
                        editing={currentlyEditing === 'displayName'}
                        type="text"
                        defaultValue={selectedChat.meta.groupName}
                        onChange={newVal => updateGroupName(chatId, newVal)}
                        style={{ marginLeft: 20, marginBottom: 20 }}
                        onPressEdit={() => this.setState({ currentlyEditing: currentlyEditing === 'displayName' ? '' : 'displayName' })}
                    >
                        <Row style={styles.centered}>
                            <Text style={styles.smallText}>{selectedChat.meta.groupName}</Text>
                        </Row>
                    </InputWithDisplay>

                    <List>
                        <ListItem itemDivider>
                            <Text style={[styles.smallText, { fontSize: 15 }]}>Group members</Text>
                        </ListItem>
                        <FlatList
                            data={groupMembers}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item: user }) => (
                                <SwipeRow
                                    style={{ height: 90, paddingBottom: 0, paddingTop: 0, paddingRight: 0, backgroundColor: '#fff' }}
                                    leftOpenValue={100}
                                    rightOpenValue={-100}
                                    ref={(c) => { this.component[user.id] = c }}
                                    onRowOpen={() => {
                                        if (this.selectedRow && this.selectedRow !== this.component[user.id]) { this.selectedRow._root.closeRow(); }
                                        this.selectedRow = this.component[user.id]
                                    }}
                                    left={(
                                        <Button
                                            style={{ backgroundColor: 'orange' }}
                                            onPress={() => {
                                                selectedChat.meta.admins.includes(user.id)
                                                    ? removeAdmin(chatId, user.id)
                                                    : addAdmin(chatId, user.id)
                                            }}
                                        >
                                            <Icon active name={selectedChat.meta.admins.includes(user.id) ? 'md-star' : 'md-star-outline'} style={{ fontSize: 40 }} />
                                        </Button>
                                    )}
                                    body={(
                                        <ContactListItem
                                            key={user.id}
                                            icon={user.thumbnail}
                                            firstName={user.firstName}
                                            lastName={user.lastName}
                                            note={selectedChat.meta.admins.includes(user.id) ? 'admin' : ''}
                                            onPress={() => navigation.navigate('ContactDetails', {
                                                config: {
                                                    contactName: `${user.firstName} ${user.lastName}`,
                                                    contactIcon: user.thumbnail,
                                                    contactId: user.id
                                                }
                                            })}
                                        />
                                    )}
                                    right={(
                                        <Button
                                            danger
                                            onPress={() => {
                                                this.selectedRow = null;
                                                removeUser(chatId, user.id)
                                            }}
                                        >
                                            <Icon active name="trash" style={{ fontSize: 40 }} />
                                        </Button>
                                    )}
                                />
                            )}
                        />
                        <ListItem itemDivider>
                            <Text style={[styles.text, { fontSize: 15 }]}>Admin settings</Text>
                        </ListItem>
                        {!!isCurrntlyInChat && (<TouchableOpacity
                            onPress={() => navigation
                                .navigate('Contacts', {
                                    onUsers: (users) => {
                                        console.log('selected users:', users)
                                        addUsers(chatId, users);
                                    }
                                })
                            }
                            style={{ flex: 1, backgroundColor: '#fff' }}
                        >
                            <Grid style={{ height: 90, backgroundColor:  '#fff', padding: 10 }}>
                                <Row>
                                    <Col style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={[styles.text]}>Add new users</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </TouchableOpacity>)}
                        <TouchableOpacity
                            onPress={() => exitChat(chatId, accountId)}
                            style={{ flex: 1, backgroundColor: '#fff' }}
                        >
                            <Grid style={{ height: 90, backgroundColor:  '#fff', padding: 10 }}>
                                <Row>
                                    <Col style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={[styles.text]}>Exit chat</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // navigation.goBack();
                                navigation.pop(2);
                                setTimeout(() => {
                                    deleteChat(chatId);
                                }, 2000)
                            }}
                            style={{ flex: 1, backgroundColor: '#fff' }}
                        >
                            <Grid style={{ height: 90, backgroundColor:  '#fff', padding: 10 }}>
                                <Row>
                                    <Col style={{ justifyContent: 'center', flex: 1 }}>
                                        <Text style={[styles.text]}>Delete chat</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </TouchableOpacity>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    smallText: {
        fontFamily: 'campton_semibold',
		fontSize: 30,
    },
    centered: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    }
});

export default ConversationSettings;
