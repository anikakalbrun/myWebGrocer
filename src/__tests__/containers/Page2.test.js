import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";

import { Page2 } from '../../containers/Page2';

let wrapper;
const mockStore = configureMockStore();
const handleSubmit = jest.fn();
const props = {
    submitting : false,
    touched : false,
    error : null,
    handleSubmit,
};

describe('Page2', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Provider store={mockStore({})}><Page2 {...props}/></Provider>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    beforeEach(() => {
        wrapper = mount(<Provider store={mockStore({})}><Page2 {...props}/></Provider>);
    });

    it('has an input with attribute [name="firstName"]', () => {
        expect(wrapper.find('input[name="firstName"]').length).toEqual(1);
    });

    it('has an input with attribute [name="surname"]', () => {
        expect(wrapper.find('input[name="surname"]').length).toEqual(1);
    });

    it('has an input with attribute [name="email"]', () => {
        expect(wrapper.find('input[name="email"]').length).toEqual(1);
    });

    it('has an day input', () => {
        expect(wrapper.find('.react-datepicker__input-container > input').length).toEqual(1);
    });

    it('has an input with attribute [name="nationality"]', () => {
        expect(wrapper.find('input[name="nationality"]').length).toEqual(1);
    });

    it('has an input with attribute [name="occupation"]', () => {
        expect(wrapper.find('input[name="occupation"]').length).toEqual(1);
    });

    it('has an button type submit', () => {
        expect(wrapper.find('button[type="submit"]').length).toEqual(1);
    });
});
