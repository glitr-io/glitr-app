import React, { Component } from 'react';
import { StatusBar, Image, TextInput, Keyboard } from 'react-native';
import { Col, Row } from "react-native-easy-grid";
import { Container, Content, Header, Left, Body, Right, Title } from 'native-base';
import CommentPost from '../organisms/CommentPost';
import ScaledImage from '../atoms/ScaledImage';
import CommentInput from '../mulecules/CommentInput';
import KeyboardGrid from '../atoms/KeyboardGrid';

class Comments extends Component {
    render() {
        return (
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left />
                    <Body>
                        <Title>Comments</Title>
                    </Body>
                    <Right />
                </Header>
                <KeyboardGrid>
                    <Row>
                        <Content style={{ backgroundColor: '#fff' }}>
                            <ScaledImage
                                source={{ uri: 'https://thumbs.dreamstime.com/t/gray-fluffy-cat-toy-lies-yellow-background-56173920.jpg' }}
                                style={{ width: '100%' }}
                            />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                            <CommentPost />
                        </Content>
                    </Row>
                    <Row style={{ height: 60 }}>
                        <CommentInput />
                    </Row>
                </KeyboardGrid>
            </Container>
        );
    }
}

export default Comments;
