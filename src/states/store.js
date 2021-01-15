import { combineReducers, createStore } from 'redux';
import addItem from "../reducers/addItem"

const rootReducers = combineReducers({
    add: addItem,
})

const store = createStore( rootReducers );


export default { store }