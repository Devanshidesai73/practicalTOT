import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import userReducer from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  loginData: persistReducer(persistConfig, userReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
