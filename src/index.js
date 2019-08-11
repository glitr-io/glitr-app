// import React, { Component } from 'react';
// import { Text, AsyncStorage } from 'react-native';
// import Expo from 'expo';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import RootStack from './routes';

// import { ApolloProvider } from 'react-apollo';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import ApolloClient, { createNetworkInterface } from 'apollo-client';
// import { persistStore, autoRehydrate } from 'redux-persist';


// // Redux Store
// import {
//     store,
//     persistor
// } from './redux/store';

// const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

// export const client = new ApolloClient({
//   networkInterface: networkInterface,
// });

// const store = createStore(
//   combineReducers({
//     apollo: client.reducer(),
//   }),
//   {}, // initial state
//   compose(
//     applyMiddleware(client.middleware()),
//     autoRehydrate(),
//   ),
// );

// // persistent storage
// persistStore(store, {
//   storage: AsyncStorage, // or whatever storage you want
// });


// class Main extends Component {
//     state = {
//         fontsLoaded: false
//     }

//     // async componentDidMount() {
//     //     await Expo.Font.loadAsync({
//     //         // Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line
//     //         // Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line
//     //         impact: require("./custom-fonts/impact.ttf"), // eslint-disable-line
//     //         campton_semibold: require("./custom-fonts/Campton-SemiBold.ttf"),
//     //         campton_light: require("./custom-fonts/Campton-Light.otf")
//     //     });
//     //     this.setState({ fontsLoaded: true })
//     // }

//     render() {
//         const { fontsLoaded } = this.state

//         async function loadResourcesAsync() {
//             await Promise.all([
//                 Asset.loadAsync([
//                     // require('./assets/images/robot-dev.png'),
//                     // require('./assets/images/robot-prod.png'),
//                 ]),
//                 Font.loadAsync({
//                     // This is the font that we are using for our tab bar
//                     // ...Ionicons.font,
//                     impact: require("./custom-fonts/impact.ttf"), // eslint-disable-line
//                     campton_semibold: require("./custom-fonts/Campton-SemiBold.ttf"),
//                     campton_light: require("./custom-fonts/Campton-Light.otf")
//                 }),
//             ]);
//         }

//         return (
//             <Provider store={store}>
//                 <PersistGate loading={null} persistor={persistor}>
//                     {fontsLoaded 
//                         ? <Text>loaded!</Text> // <RootStack />
//                         : <Expo.AppLoading
//                             startAsync={loadResourcesAsync}
//                             onFinish={() => this.setState({ fontsLoaded: true })}
//                         />
//                     }
//                     {/* <Text>hello world</Text> */}
//                 </PersistGate>
//             </Provider>
//         );
//         // return (
//         //     <ApolloProvider store={store} client={client}>
//         //         <Text>hello world</Text>
//         //     </ApolloProvider>
//         // );
//         // return (
//         //     <Text style={{ marginTop: 40 }}>hello world???...</Text>
//         // );
//     }
// }

// export default Main;





import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from './navigation/AppNavigator';


// Redux Store
import {
    store,
    persistor
} from './redux/store';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootStack />
            </PersistGate>
        </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
    //   require('./assets/images/robot-dev.png'),
    //   require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
        Roboto: require('./custom-fonts/Roboto-Regular.ttf'), // eslint-disable-line
        Roboto_medium: require('./custom-fonts/Roboto-Medium.ttf'), // eslint-disable-line
        impact: require("./custom-fonts/impact.ttf"), // eslint-disable-line
        campton_semibold: require("./custom-fonts/Campton-SemiBold.ttf"),
        campton_light: require("./custom-fonts/Campton-Light.otf")
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
