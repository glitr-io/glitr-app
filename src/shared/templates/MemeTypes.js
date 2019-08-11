import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import MemeListItem from '../organisms/MemeListItem';
import { withNavigation } from 'react-navigation';

const MemeTypes = ({ navigation }) => (
    <Container>
        <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='md-arrow-round-back' style={{ color: 'white' }} />
                </Button>
            </Left>
            <Body>
                <Title>meme types</Title>
            </Body>
            <Right />
        </Header>
        <Content style={{ backgroundColor: '#eee' }}>
            <MemeListItem onMemeSelect={(meme) => navigation.pop() && navigation.getParam('onMemeSelect')(meme)} />
        </Content>
    </Container>
);

export default withNavigation(MemeTypes);
