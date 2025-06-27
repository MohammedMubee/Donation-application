// Importing the combineReducers function from Redux
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// Importing AsyncStorage from the @react-native-async-storage/async-storage library to persist Redux state
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing the persistReducer and persistStore functions from the redux-persist library
import { persistReducer, persistStore } from 'redux-persist';
// Importing the User reducer from the ./reducers/User file
import User from './reducer/User';
import Categories from './reducer/Categories';
import Donations from './reducer/Donation'

// Creating a rootReducer that combines all reducers in the app
const rootReducer = combineReducers({
  // Here, we're combining the User reducer and calling it "user"
  user: User,
  categories: Categories,
  donations:Donations
});

// Configuring the redux-persist library to persist the root reducer with AsyncStorage
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

// Exporting the rootReducer to be used in the store

const store = configureStore({
  reducer: persistedReducer,

  // Using the getDefaultMiddleware function from the Redux Toolkit to add default middleware to the store
  // We're passing in an object with the serializableCheck key set to false to avoid serialization errors with non-serializable data
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// Exporting the store to be used in the app
// Also exporting the persistor object created with the persistStore function from redux-persist
export default store;
export const persistor = persistStore(store);
