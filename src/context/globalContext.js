import React, { createContext, useReducer, useContext } from "react"

//Define Context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//Reducer
const globalReducer = (state, action) => {
console.log("Check => ~ file: globalContext.js ~ line 9 ~ globalReducer ~ state", state)
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    case "SET_EDITION": {
      return {
        ...state,
        currentEdition: action.currentEdition,
      }
    }
    case "SET_MENU": {
      return {
        ...state,
        currentMenu: action.currentMenu,
      }
    }
    // case "CURSOR_TYPE": {
    //   return {
    //     ...state,
    //     cursorType: action.cursorType,
    //   }
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

//Provider
// window.localStorage.getItem("theme") == null
// ? "dark"
// : window.localStorage.getItem("theme"),
// cursorType: false,
// cursorStyles: ["pointer", "hovered", "locked", "white"],
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") == null
        ? "dark"
        : window.localStorage.getItem("theme"),
    currentMenu: 'Edition',
    currentEdition: 0
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
