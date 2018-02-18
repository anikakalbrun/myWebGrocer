import React from 'react';
import Button from '../../components/Button';

let wrapper;
let props = {
    text: 'Submit',
    callback: jest.fn(),
    btnClassName: 'myClass'
};

describe('Button', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Button type={'button'} disabled={true} {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('has a default property btnClassName equal to ""', () => {
        wrapper = shallow(<Button text={'Submit'} />);
        expect(wrapper.find('button').props().className).toEqual('btn ')
    });

    beforeEach(() => {
        wrapper = shallow(<Button {...props}/>);
    });

    it('has a default property disabled equal to false', () => {
        expect(wrapper.props().disabled).toEqual(false)
    });

    it('has a default property type equal to "button"', () => {
        expect(wrapper.props().type).toEqual('button')
    });


});
