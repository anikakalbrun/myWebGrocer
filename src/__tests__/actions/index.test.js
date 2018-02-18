import {setPageNumber} from '../../actions';
import {SET_PAGE_NUMBER} from '../../actions';

describe('actions', () => {

    it('setPageNumber creates an action', () => {
        const value = 2;
        const expectedAction = {
            type: SET_PAGE_NUMBER,
            payload: value
        };
        expect(setPageNumber(value)).toEqual(expectedAction);
    });

});
