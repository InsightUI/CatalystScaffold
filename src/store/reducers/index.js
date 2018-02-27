import { routerReducer } from 'react-router-redux'
import { titleReducer } from '../../utils/documentTitle'

const rootReducer = {
	router: routerReducer,
	title: titleReducer
}

export default rootReducer
