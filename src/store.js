import { createStore, applyMiddleware } from 'redux'
import goalsReducer from './reducers/goalsReducer'
import thunk from 'redux-thunk'


const store = createStore(goalsReducer, applyMiddleware(thunk))


export default store