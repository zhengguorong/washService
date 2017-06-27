import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware)
)

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )
  sagaMiddleware.run(sagas)
  return store
}


