'use client'
import React, { ReactNode, useEffect } from 'react'
import StoreProvider, { useAppSelector } from '@/app/redux'

type Props = {
    children: ReactNode
}

const StoreProviderWrapperChild = ({children}: Props) => {
    // Fetching the value of isDarkMode from the Redux store
    const isDarkMode: boolean = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
        console.log("useEffect triggered, isDarkMode:", isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            console.log('It is dark mode');
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            console.log('It is light mode');
        }
        console.log(document.documentElement.classList)
    }, [isDarkMode]); // Re-run this effect when isDarkMode changes

    return (
        <>
            {children}
        </>
    );
};

const StoreProviderWrapper = ({children}: Props) => {
  return (
    <StoreProvider>
        <StoreProviderWrapperChild>
            {children}
        </StoreProviderWrapperChild>
    </StoreProvider>
  );
};

export default StoreProviderWrapper;
