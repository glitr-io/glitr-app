import React, { Component } from 'react';
import { StatusBar, View, Alert, ListView, FlatList } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import ContactListItem from '../organisms/ContactListItem';
import AddButton from '../atoms/AddButton';
import CancelButton from '../atoms/CancelButton';
import TickButton from '../atoms/TickButton';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

class Contacts extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2)
        });

        this.state = {
            isSelectingGroup: true,
            selectedUsers: [],
            dataSource: dataSource.cloneWithRows(props.contacts)
        };
    }

    // componentDidMount () {
    //     const { getAllContacts, addNewContacts, contacts } = this.props;
    //     // this.showFirstContactAsync();
    //     // console.log('loading contacts');
    //     getAllContacts();
    //     // addNewContacts();
    //     console.log('contacts saved:', contacts.length);
    // }

    componentDidUpdate (prevProps, prevState) {
        const { contacts } = this.props;
        const { dataSource, selectedUsers } = this.state;
        if (prevState.selectedUsers !== selectedUsers) {

            this.setState({
                dataSource: dataSource.cloneWithRows(contacts.map(contact => ({
                    ...contact,
                    selected: selectedUsers.includes(contact.id)
                })))
            });
        }
    }

    showFirstContactAsync () {
        // Ask for permission to query contacts.
        Expo.Permissions.askAsync(Expo.Permissions.CONTACTS)
            .then(permission => {
                if (permission.status !== 'granted') {
                    // Permission was denied...
                    return;
                }
                Expo.Contacts.getContactsAsync({
                    fields: [
                        Expo.Contacts.PHONE_NUMBERS,
                        Expo.Contacts.EMAILS,
                    ],
                    pageSize: 10,
                    pageOffset: 0,
                }).then(contacts => {
                    if (contacts.total > 0) {
                        Alert.alert(
                                'Your first contact is...',
                                `Name: ${contacts.data[0].name}
                        ` +
                                `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}
                        ` +
                                `Emails: ${JSON.stringify(contacts.data[0].emails)}`
                        );
                    }
                });
            });
    }

    handleContactSelect(contactId) {
        const {
            navigation
        } = this.props;
        const {
            isSelectingGroup,
            selectedUsers
        } = this.state;

        if (isSelectingGroup) {
            selectedUsers.includes(contactId)
                ? this.setState({ selectedUsers: selectedUsers.filter(id => id !== contactId )})
                : this.setState({ selectedUsers: [...selectedUsers, contactId]});
        } else {
            navigation.getParam('onUsers')([contactId]);
            navigation.goBack();
        }
    }

    handleGroupSelect() {
        const {
            navigation
        } = this.props;
        const {
            selectedUsers
        } = this.state;

        navigation.getParam('onUsers')(selectedUsers);
        navigation.goBack();
    }

    render () {
        const { contacts, getAllContacts } = this.props;
        const {
            isSelectingGroup,
            selectedUsers,
            dataSource
        } = this.state;

        return (
            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#65318f' }}>
                    <Left />
                    <Body>
                        <Title>contacts</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => getAllContacts()}>
                           <Icon name="md-refresh" style={{ color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                <Container style={{ backgroundColor: '#eee' }}>
                    {contacts.length > 0 && (<ListView
                        renderScrollComponent={props => <InfiniteScrollView {...props} distanceToLoadMore={2000} />}
                        dataSource={dataSource}
                        renderRow={contact => {
                            return (
                                <ContactListItem
                                    key={contact.id}
                                    icon={contact.thumbnail}
                                    firstName={contact.firstName}
                                    lastName={contact.lastName}
                                    selected={contact.selected}
                                    onPress={() => this.handleContactSelect(contact.id)}
                                    onLongPress={() => this.setState({ isSelectingGroup: true }, () => this.handleContactSelect(contact.id))}
                                />
                            )
                        }}
                        canLoadMore={() => console.log('canLoadMore')}
                        onLoadMoreAsync={() => console.log('onLoadMoreAsync')}
                    />)}
                    {/* <View style={{ height: 100 }} /> */}
                </Container>
                {!!isSelectingGroup
                    ? (<View style={{ position: 'absolute', bottom: 0, width: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                        <CancelButton onPress={() => this.setState({ isSelectingGroup: !isSelectingGroup })} />
                        <TickButton disabled={selectedUsers.length < 1} onPress={() => this.handleGroupSelect()} />
                    </View>)
                    : (<View style={{ position: 'absolute', bottom: 0, width: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                        <AddButton onPress={() => this.setState({ isSelectingGroup: !isSelectingGroup })} />
                    </View>)
                }
            </Container>
        );
    }
}

export default Contacts;
