import React from 'react';
import FieldWrapper from '../../components/FieldWrapper';

let wrapper;

describe('FieldWrapper', () => {

    it('renders correctly when no error is present', () => {
        const props = {
            children: <input name='firstName'/>,
            label: "First Name",
            touched: false,
            error: undefined
        };
        wrapper = renderer.create(<FieldWrapper {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('does not render error when field was not touched', () => {
        const props = {
            children: <input name='firstName'/>,
            label: "First Name",
            touched: false,
            error: 'required'
        };
        wrapper = renderer.create(<FieldWrapper {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders error message when error is present and field was touched', () => {
        const props = {
            children: <input name='firstName'/>,
            label: "First Name",
            touched: true,
            error: 'required'
        };
        wrapper = renderer.create(<FieldWrapper {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
