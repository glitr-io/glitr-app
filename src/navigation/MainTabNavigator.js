import React from 'react';
import { Platform, Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

import MemeEditorScreen from '../screens/MemeEditor';
import MemesScreen from '../screens/Memes';
import LibraryScreen from '../screens/Library';

import GlitrIconSelected from '../shared/images/meme_icon_Selected.png';
import MessageIconSelected from '../shared/images/message_Selected.png';
import NotificationIconSelected from '../shared/images/notification_Selected.png';
import UserIconSelected from '../shared/images/user_Selected.png';
import EditorIconSelected from '../shared/images/close_big.png';

import GlitrIcon from '../shared/images/meme_icon.png';
import MessageIcon from '../shared/images/message.png';
import NotificationIcon from '../shared/images/notification.png';
import UserIcon from '../shared/images/user.png';
import EditorIcon from '../shared/images/choose_meme_big.png';

const MemeEditor = createStackNavigator({
  MemeEditor: MemeEditorScreen,
}, {
  headerMode: 'none'
});

const Library = createStackNavigator({
  Library: LibraryScreen,
}, {
  headerMode: 'none'
});

const Memes = createStackNavigator({
  Memes: MemesScreen,
}, {
  headerMode: 'none'
});

MemeEditor.navigationOptions = {
  tabBarLabel: 'editor',
  tabBarIcon: ({ focused }) => <Image
    source={(focused ? GlitrIconSelected : GlitrIcon)}
    style={{width: 26, height: 26}}
  />
};

Library.navigationOptions = {
  tabBarLabel: 'library',
  tabBarIcon: ({ focused }) => <Image
    source={(focused ? GlitrIconSelected : GlitrIcon)}
    style={{width: 26, height: 26}}
  />
};

Memes.navigationOptions = {
  tabBarLabel: 'Memes',
  tabBarIcon: ({ focused }) => <Image
    source={(focused ? GlitrIconSelected : GlitrIcon)}
    style={{width: 26, height: 26}}
  />
};

export default createBottomTabNavigator({
  MemeEditor,
  Library,
  Memes
}, {
  initialRouteName: 'MemeEditor',
  tabBarOptions: {
      showLabel: false
  }
});
