import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {imagesReducer, userReducer, commentsListReducer} from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistConfig = {
  key: 'comments',
  storage: AsyncStorage,
  blackList: ['comments', 'isOpen'],
};

const reducers = combineReducers({
  userReducer: userReducer,
  commentsListReducer: persistReducer(persistConfig, commentsListReducer),
  imagesReducer: imagesReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {store, persistor};
