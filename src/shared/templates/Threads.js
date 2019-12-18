import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title } from 'native-base';
import ThreadListItem from '../organisms/ThreadListItem';

const Threads = () => (
    <Container>
        <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
            <Left />
            <Body>
                <Title>Threads</Title>
            </Body>
            <Right />
        </Header>
        <Content style={{ backgroundColor: '#eee', paddingTop: 10 }}>
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
            <ThreadListItem />
        </Content>
    </Container>
);

export default Threads;
