import { createStore } from "redux";
import { reducer as formReducer } from 'redux-form'

import appReducer, { pageReducer } from '../../reducers';
import { INITIAL_STATE } from '../../reducers';
import {SET_PAGE_NUMBER} from '../../actions'

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(pageReducer(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should handle SET_PAGE_NUMBER', () => {
        const stateBefore = INITIAL_STATE;
        const action = {
            type: SET_PAGE_NUMBER,
            payload: 2
        };
        const stateAfter = { pageNumber: 2 };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(pageReducer(stateBefore, action)).toEqual(stateAfter)
    });
});

describe('appReducer', () => {
    let store = createStore(appReducer);

    it('initial state of the root reducer matches', () => {
        expect(store.getState().pageReducer).toEqual(pageReducer(undefined, {}));
        expect(store.getState().form).toEqual(formReducer(undefined, {}))
    });
});
