import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import rootReducer from './rootReducer'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const initialState = {
  AppReducer: {
    sdk: undefined,
    loading: false,
    loadingMessage: '',
    error: undefined,
    networkId: -1,
    walletAddress: '',
    reservations: undefined,
    tokens: [],
    tokenIndex: undefined,
    pmEnabled: undefined,
    delegates: undefined,
    features: undefined,
    tokenholders: [],
    reloadTokenholders: false
  }
}

export const Store = createContext()
const WrappedApp = () => {
  const store = useReducer(rootReducer, initialState)
  return (<Store.Provider value={store}><App /></Store.Provider>)
}

// permissions
export const _split = (string) => {
  return string.split(/(?=[A-Z])/).join(' ')
}

const DispatchContext = React.createContext(null)
export default DispatchContext

ReactDOM.render(< BrowserRouter><WrappedApp /></BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
