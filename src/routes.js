import React from 'react';
import { connect } from 'react-redux';
import { Platform, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Colors from './constants/Colors';

import Login from './screens/Login';
import Memes from './screens/Memes';
import Comments from './screens/Comments';
import Chats from './screens/Chats';
import Conversation from './screens/Conversation';
import MemeTypes from './screens/MemeTypes';
import MemeEditor from './screens/MemeEditor';
import Contacts from './screens/Contacts';
import ConversationSettings from './screens/ConversationSettings';
import Profile from './screens/Profile';
import ContactDetails from './screens/ContactDetails';

import GlitrIconSelected from './shared/images/meme_icon_Selected.png';
import MessageIconSelected from './shared/images/message_Selected.png';
import NotificationIconSelected from './shared/images/notification_Selected.png';
import UserIconSelected from './shared/images/user_Selected.png';
import EditorIconSelected from './shared/images/close_big.png';

import GlitrIcon from './shared/images/meme_icon.png';
import MessageIcon from './shared/images/message.png';
import NotificationIcon from './shared/images/notification.png';
import UserIcon from './shared/images/user.png';
import EditorIcon from './shared/images/choose_meme_big.png';

const MainTab = createBottomTabNavigator(
    {
        Memes: {
            screen: Memes
        },
        Chats: {
            screen: Chats
        },
        MemeTypes: {
            screen: MemeTypes
        },
        Notifications: {
            screen: Login
        },
        Profile: {
            screen: Profile
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let icon;
                switch (routeName) {
                    case 'Profile':
                        icon = focused ? UserIconSelected : UserIcon
                        break;
                    case 'Memes':
                        icon = focused ? GlitrIconSelected : GlitrIcon
                        break;
                    case 'Chats':
                        icon = focused ? MessageIconSelected : MessageIcon
                        break;
                    case 'Notifications':
                        icon = focused ? NotificationIconSelected : NotificationIcon
                        break;
                    case 'MemeTypes':
                        icon = focused ? EditorIconSelected : EditorIcon
                        break;
                    default:
                        break;
                }

                return (
                    <Image
                        source={icon}
                        style={[{ height: 20, width: 20 }, (routeName === 'MemeTypes' ? { height: 60, width: 60 } : {})]}
                        resizeMode="contain"
                    />
                );
            }
        }),
        initialRouteName: 'Memes',
        tabBarOptions: {
            showLabel: false
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);

const RootStack = createStackNavigator(
    {
        Main: { screen: MainTab },
        Comments: { screen: Comments },
        Conversation: { screen: Conversation },
        MemeEditor: { screen: MemeEditor },
        MemeTypesFullScreen: { screen: MemeTypes },
        Contacts: { screen: Contacts },
        ConversationSettings: { screen: ConversationSettings },
        ContactDetails: { screen: ContactDetails }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
);

export default () => <RootStack />;

// const mapStateToProps = ({ account: { loggedIn } }) => ({ loggedIn });

// export default connect(mapStateToProps)(({ loggedIn }) => {
//     if (!loggedIn) return <Login />;
//     return <RootStack />;
// });