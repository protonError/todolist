// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import todoReducer from '@src//slices/todoSlice';

// Configure persistReducer
const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and configure the store
const makeStore = () =>
    configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });

const store = makeStore();

const persistor = persistStore(store);

const wrapper = createWrapper(makeStore);

export { store, persistor, wrapper };
