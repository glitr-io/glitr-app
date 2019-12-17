import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppLoadingScreen from '../screens/AppLoading';
import LoginScreen from '../screens/Login';
import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';

export default createAppContainer(
  createSwitchNavigator(
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    {
      AppLoadingScreen: AppLoadingScreen,
      // App: AppStack,
      Main: MainTabNavigator,
      Auth: AuthStackNavigator,
    },
    {
      initialRouteName: 'AppLoadingScreen',
    }
  )
);

/*
root :{
  default appLoading: {
    appLoadingScreen
  }
  authStack: {
    default register
    login
    forgotPassword
    socialMediaLogin
  }
  mainStack: {
    default memes {
      default memeThreads
      memeThread {
        default memeThreadListing
        memePost {
          default memePostSummary
          memeImagePreview
          memeThread
        }
        memeImagePreview
        memeThread
      }
    }
    chats {
      default chatListing
      conversation {
        default conversationListing
        memeImagePreview
        conversationSettings {
          default coversationSettingsPage
          memeImagePreview (group icon preview)
          contactDetails {
            default contactDetailsPage
            memeImagePreview (contact icon preview)
        }
      }
      newChat {
        default contactList
        newGroup
      }
    }
    memeEditor {
      default memeEditor
      library
    }
    profile {
      default profileScreen
      memeImagePreview (user icon preview)
    }
  }
}
*/