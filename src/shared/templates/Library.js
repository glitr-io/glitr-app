import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title } from 'native-base';
import MemePreview from '../organisms/MemePreview';

const Library = ({
    memes = [],
    saveMeme,
    removeMeme
}) => {
    const [isEditing, setIsEditing] = useState(false);
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
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                    {memes.map(meme => (
                        <MemePreview
                            base64={meme.metadata.thumbnail}
                            selected={isEditing}
                            onEditMode={() => setIsEditing(true)}
                            closeEditMode={() => setIsEditing(false)}
                        />
                    ))}
                </View>
            </Content>
        </Container>
    );
};

export default Library;
