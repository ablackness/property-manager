import { combineReducers } from 'redux';
import propertySearchReducer from './components/PropertySearch/propertySearchReducer';

const rootReducer = combineReducers({
    search: propertySearchReducer
})

export default rootReducer;