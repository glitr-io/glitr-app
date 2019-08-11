import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import MemeListItem from '../organisms/MemeListItem';
import SquaredCircle from '../atoms/SquaredCircle';
import ScaledImage from '../atoms/ScaledImage';
import KeyboardGrid from '../atoms/KeyboardGrid';
import { Col, Row, Grid } from "react-native-easy-grid";
import InputWithDisplay from '../organisms/InputWithDisplay';

class Profile extends Component {
    state = {
        currentlyEditing: ''
    }

    render () {
        const {
            navigation,
            changeDisplayName,
            changeDisplayIcon,
            displayName,
            displayIcon,
            logout
        } = this.props;
        const {
            currentlyEditing
        } = this.state;
        const {
            displayName: contactName,
            displayIcon: contactIcon
        } = navigation.getParam('config') || {};

        return ( // update this component to have state to hold data on currently editing
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='md-arrow-round-back' style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>profile</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ padding: 20 }}>
                    <InputWithDisplay
                        editing={currentlyEditing === 'displayIcon'}
                        editable={!!changeDisplayIcon}
                        type="imagePicker"
                        defaultValue={contactIcon || displayIcon}
                        config={{ size: 70, advanced: true }}
                        onChange={newVal => this.setState({ currentlyEditing: '' }, () => changeDisplayIcon(newVal))}
                        onPressEdit={() => this.setState({ currentlyEditing: currentlyEditing === 'displayIcon' ? '' : 'displayIcon' })}
                    >
                        <Row style={styles.centered}>
                            <SquaredCircle size={200} style={{ margin: 20 }}>
                                <ScaledImage
                                    source={{ uri: contactIcon || displayIcon }}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="cover"
                                />
                            </SquaredCircle>
                        </Row>
                    </InputWithDisplay>
                    <InputWithDisplay
                        editing={currentlyEditing === 'displayName'}
                        editable={!!changeDisplayName}
                        type="text"
                        defaultValue={contactName || displayName}
                        onChange={newVal => changeDisplayName(newVal)}
                        style={{ marginLeft: 20 }}
                        onPressEdit={() => this.setState({ currentlyEditing: currentlyEditing === 'displayName' ? '' : 'displayName' })}
                    >
                        <Row style={styles.centered}>
                            <Text style={styles.text}>{contactName || displayName}</Text>
                        </Row>
                    </InputWithDisplay>
                    <Button
                        full
                        style={{ backgroundColor: '#65318f', height: 50, marginTop: 20 }}
                        onPress={() => logout()}
                    >
                        <Text style={[styles.text, { color: 'white', marginHorizontal: 10 }]}>logout</Text>
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

export default Profile;
