import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon, List, ListItem } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import MemeListItem from '../organisms/MemeListItem';
import SquaredCircle from '../atoms/SquaredCircle';
import ScaledImage from '../atoms/ScaledImage';
import KeyboardGrid from '../atoms/KeyboardGrid';
import { Col, Row, Grid } from "react-native-easy-grid";
import InputWithDisplay from '../organisms/InputWithDisplay';
import { withNavigation } from 'react-navigation';
import ChatListItem from '../organisms/ChatListItem';

class ContactDetails extends Component {
    state = {
        currentlyEditing: ''
    }

    render () {
        const {
            currentlyEditing
        } = this.state;
        const {
            navigation,
            chats,
            createChat
        } = this.props;
        const {
            contactName,
            contactIcon,
            contactId
        } = navigation.getParam('config') || {};

        const chatsWithContact = chats.filter(chat => chat.meta.users.includes(contactId));

        return ( // update this component to have state to hold data on currently editing
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='md-arrow-round-back' style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Contact Details</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Row style={styles.centered}>
                        <SquaredCircle size={200} style={{ margin: 20 }}>
                            <ScaledImage
                                source={{ uri: contactIcon || displayIcon }}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="cover"
                            />
                        </SquaredCircle>
                    </Row>
                    <Row style={styles.centered}>
                        <Text style={styles.text}>{contactName || displayName}</Text>
                    </Row>
                    <List>
                        <ListItem itemDivider>
                            <Text style={[styles.text, { fontSize: 15 }]}>conversations with contact</Text>
                        </ListItem>
                        {chatsWithContact
                            .sort((a, b) => a.meta.updatedAt > b.meta.updatedAt)
                            .map(chat => (
                                <ChatListItem key={chat.id} data={chat} updateChat={() => console.log('updating chat')} />
                            ))
                        }
                    </List>
                    <Button
                        block
                        style={{ margin: 10, height: 50 }}
                        onPress={() => createChat([contactId], `new chat with ${contactName}`)}
                    >
                        <Text style={[styles.text, { color: 'white', fontSize: 20 }]}>start new chat</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
		fontSize: 30,
    },
    centered: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default withNavigation(ContactDetails);
