"use client";
import { persistor, store } from "@src/lib/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from 'react-redux';
import { ClockLoader, HashLoader } from "react-spinners";
import { PersistGate } from 'redux-persist/integration/react';

const ThemeProviders = ({ children, ...props }) => {
    return (
        <NextThemesProvider {...props}>
            <Provider store={store}>
                <PersistGate loading={<div className="h-screen flex justify-center items-center w-full"><ClockLoader  className="!text-primary" color="#2f6CCE" /></div>} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>

        </NextThemesProvider>
    );
}


export default ThemeProviders;

