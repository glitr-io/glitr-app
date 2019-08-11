import React, { Component } from 'react';
import { StatusBar, ImageBackground, View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import MessageRecieved from '../organisms/MessageRecieved';
import MessageSent from '../organisms/MessageSent';
import MessageItem from '../organisms/MessageItem';
import ChooseMemeButton from '../atoms/ChooseMemeButton';
import { withNavigation } from 'react-navigation';

class Conversation extends Component {
    render () {
        const { navigation, addMessage, chats = [] } = this.props;
        const groupId = navigation.getParam('groupId');
        console.log('chats length:', chats.length)
        const {
            id,
            meta,
            messages
        } = chats.find(chat => chat.id === groupId);

        return !!groupId && !!id && (
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='md-arrow-round-back' style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{meta.groupName}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => navigation.navigate('ConversationSettings', { chatId: id })}>
                            <Icon name='md-settings' style={{ color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                <ImageBackground source={{ uri: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png' }} style={{ flex: 1, position: 'relative' }}>
                    <Content style={{ paddingBottom: 100 }}>
                        {messages.map((message, index) => (<MessageItem key={index} message={message} />))}
                        <View style={{ height: 100 }} />
                    </Content>
                    <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center' }}>
                        <ChooseMemeButton onMemeSelect={data => addMessage(id, {
                            sender: 'aaa',
                            isUnread: true,
                            message: data,
                            createdAt: new Date().valueOf()
                        })} />
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

export default withNavigation(Conversation);
