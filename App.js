import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { getFontFamily } from './assets/fonts/helper';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/combineReducer';
import store from './redux/combineReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// AsyncStorage.clear();

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView fills the screen
  },
});

export default App;
