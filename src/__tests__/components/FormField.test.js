import React from 'react';
import FormField from '../../components/FormField';

let wrapper;
let props = {
    input: {},
    label: "First Name",
    placeholder: "First Name",
    autoComplete: "given-name",
    disabled: false,
    meta: {
        touched: false,
        error: undefined
    }
};

describe('FormField', () => {

    it('renders the FieldWrapper component', () => {
        wrapper = shallow(<FormField {...props}/>);
        expect(wrapper.find('FieldWrapper').length).toEqual(1);
    });

    it('renders input as child component and provides propper props to it', () => {
        wrapper = shallow(<FormField {...props}/>);
        expect(wrapper.find('FieldWrapper').at(0).props().children).toMatchSnapshot();
    });

    beforeEach(() => {
        props = {
            input: {},
            label: "First Name",
            placeholder: "First Name",
            autoComplete: "given-name",
            disabled: false,
            meta: {
                touched: true,
                error: 'required'
            }
        };

        wrapper = shallow(<FormField {...props}/>);
    });

    it('provides error prop to the FieldWrapper component', () => {
        expect(wrapper.find('FieldWrapper').at(0).props().error).toEqual('required');
    });

    it('provides label prop to the FieldWrapper component', () => {
        expect(wrapper.find('FieldWrapper').at(0).props().label).toEqual('First Name');
    });

    it('provides touched prop to the FieldWrapper component', () => {
        expect(wrapper.find('FieldWrapper').at(0).props().touched).toEqual(true);
    });

})
;
