import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'
import {SET_PAGE_NUMBER} from '../actions';

export const INITIAL_STATE = {
    pageNumber: 1
};

export const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PAGE_NUMBER:
            return {...state, pageNumber: action.payload};
        default:
            return state
    }
};

const appReducer = combineReducers({
    pageReducer,
    form: formReducer
});


export default appReducer;