import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
let enhancer
if (__DEV__) {
  enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
} else {
  enhancer = compose(
    applyMiddleware(sagaMiddleware)
  )
}
export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )
  sagaMiddleware.run(sagas)
  return store
}


