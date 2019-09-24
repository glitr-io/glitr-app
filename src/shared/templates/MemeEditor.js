import React, { PureComponent } from 'react';
import { StatusBar, View, TouchableWithoutFeedback } from 'react-native';
import { takeSnapshotAsync } from 'expo';
import { Container, Content, Header, Left, Body, Right, Title, Tab, Tabs, Button, Icon, Text } from 'native-base';
import Drawer from 'react-native-drawer';
import { Col, Row } from "react-native-easy-grid";
import MemeCanvas from '../organisms/meme-canvas/MemeCanvas';
import MemePallet from '../organisms/meme-pallet/MemePallet';
import MemeLayers from  '../organisms/meme-layers/MemeLayers';
import MemeEditorComponent from  '../organisms/meme-editor';
import KeyboardGrid from '../atoms/KeyboardGrid';
import TickButton from '../atoms/TickButton';
import DownloadButton from '../atoms/DownloadButton';
import Chance from 'chance';
const chance = new Chance();

class MemeEditor extends PureComponent {
    getMeme() {
        const { navigation } = this.props;
        takeSnapshotAsync(this.meme, {
            result: 'data-uri'
        })
            .then(result =>  navigation.pop() && navigation.getParam('onMemeSelect')(result));
    }

    closeDrawer() {
        this.drawer.close()
    };

    openDrawer() {
        this.drawer.open()
    };

    render() {
        const {
            navigation,
            saveMeme,
            metadata,
            memeItems,
            updateMemeItems
        } = this.props;
        const isSending = !!navigation.getParam('onMemeSelect');

        return (
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left>
                        {/* <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='md-arrow-round-back' style={{ color: 'white' }} />
                        </Button> */}
                    </Left>
                    <Body>
                        <Title>meme editor</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => saveMeme({
                                id: chance.hash(),
                                metadata,
                                memeItems
                            })}
                        >
                            <Icon name={`md-${isSending ? 'send' : 'add'}`} style={{ color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                {/* <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => updateMemeItems(memeItems.map(item => ({ ...item, isFocused: false })))}> */}
                    <KeyboardGrid style={{ backgroundColor: '#eee' }}>
                        <Row style={{ flex: 1 }}>
                            <Content contentContainerStyle={{}}>
                                    <MemeEditorComponent
                                        // memeItems={memeItems}
                                        // defaultMemeItems={memeItems}
                                        onSave={(memeData) => saveMeme(memeData)}
                                        onChange={newmemeItems => console.log('onChange:', newmemeItems)}
                                    />

                                    {/* <DownloadButton onPress={() => this.openDrawer()} /> */}
                            </Content>
                        </Row>
                    </KeyboardGrid>
                {/* </TouchableWithoutFeedback> */}
            </Container>
        );
    }
}

export default MemeEditor;
