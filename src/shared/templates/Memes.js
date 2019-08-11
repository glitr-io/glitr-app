import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title } from 'native-base';
import MemePost from '../organisms/MemePost';

const Memes = () => (
    <Container>
        <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
            <Left />
            <Body>
                <Title>Memes</Title>
            </Body>
            <Right />
        </Header>
        <Content style={{ backgroundColor: '#eee', paddingTop: 10 }}>
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
            <MemePost />
        </Content>
    </Container>
);

export default Memes;
