import { createStore,combineReducers } from 'redux';

import login from './reducer/Login'

const allReducer = {
  login
}

const rootReducer = combineReducers(allReducer)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store