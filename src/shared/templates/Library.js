import React, { useState, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title } from 'native-base';
import MemePreview from '../organisms/MemePreview';

const Library = ({
    memes = [],
    loadCanvas,
    removeMeme
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentMemes, setCurrentMemes] = useState(memes);

    useEffect(() => {
        setCurrentMemes(memes);
    });

    return (
        <Container>
            <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                <Left />
                <Body>
                    <Title>Library</Title>
                </Body>
                <Right />
            </Header>
            <Content style={{ backgroundColor: '#eee', paddingTop: 10 }}>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', overflow: 'scroll' }}>
                    {currentMemes.map((meme, index) => (
                        <MemePreview
                            key={index}
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            onPressClose={() => {
                                setIsEditing(false);
                                removeMeme(meme.id);
                            }}
                            onPress={() => loadCanvas(meme)}
                        />
                    ))}
                </View>
            </Content>
        </Container>
    );
};

export default Library;
