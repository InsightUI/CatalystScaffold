import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { history } from '../navigation'

const middleware = [
  thunk,
  routerMiddleware(history)
]

export default middleware
