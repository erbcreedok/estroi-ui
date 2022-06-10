import {RootStore} from "./RootStore";
import {createContext, useContext} from "react";

export const initStore = new RootStore()

export const StoreContext = createContext(initStore)

export const StoreProvider = ({ value = initStore, children }) => (
  <StoreContext.Provider value={value}>{ children }</StoreContext.Provider>
)

export const useStore = () => useContext(StoreContext)
