import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import ChatListItem from '../organisms/ChatListItem';
import AddButton from '../atoms/AddButton'

class Chats extends Component {
    componentDidUpdate (prevProps) {
        const { chats, navigation } = this.props;
        const { chats: prevChats } = prevProps;
        if (chats.length > prevChats.length) {
            const newlyCreatedChat = chats.filter(chat => !prevChats.find(prevChat => chat.id === prevChat.id))[0];
            navigation.navigate('Conversation', { groupId: newlyCreatedChat.id });
        }
    }

    render () {
        const {
            navigation,
            chats,
            createChat
        } = this.props;

        return (
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left />
                    <Body>
                        <Title>Chats</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ backgroundColor: '#eee' }}>
                    {chats
                        .sort((a, b) => a.meta.updatedAt > b.meta.updatedAt)
                        .map(chat => (
                            <ChatListItem key={chat.id} data={chat} updateChat={() => console.log('updating chat')} />
                        ))
                    }
                    <View style={{ height: 100 }} />
                </Content>
                <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center' }}>
                    <AddButton
                        onPress={() => navigation.navigate('Contacts', {
                            onUsers: (users) => createChat(users)
                        })}
                    />
                </View>
            </Container>
        );
    }
}

export default Chats;
