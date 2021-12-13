import React from 'react'
import { View, LogBox, ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import Home from './src/sceens/home'
import styles from './src/assets/style';

const App = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <Provider store={store}>
      <PersistGate loading={<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>} persistor={persistor}>
        <View>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  )
}

export default App
