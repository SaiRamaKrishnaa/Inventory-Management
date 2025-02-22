import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapsed: boolean
    isDarkMode: boolean
    isStoreInitialized: boolean
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
    isStoreInitialized: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        },

        setIsDarkMode: (state, action: PayloadAction<boolean> ) => {
            state.isDarkMode = action.payload 
        },
        initializeStore: (state, action: PayloadAction<boolean>) => {
            state.isStoreInitialized = action.payload
        }
    }
})

export const {setIsSidebarCollapsed, setIsDarkMode, initializeStore} = globalSlice.actions

export default globalSlice.reducer