import React from 'react';
import moment from 'moment';

import DateField from '../../components/DateField';

let wrapper;
const label = "Date";
const placeholder = "Date";
let disabled = false;
const maxDate = '2020-05-21';
const minDate = '1989-09-02';
let meta = {touched: false, error: undefined, onChange: jest.fn()};
const input = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    value: '2018-06-06'
};


describe('DateField', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(
            <DateField label={label}
                       placeholder={placeholder}
                       disabled={disabled}
                       maxDate={maxDate}
                       minDate={minDate}
                       meta={meta}
                       input={input}
            />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    describe('component methods', () => {
        beforeEach(() => {
            meta = {touched: false, error: undefined, onChange: jest.fn()};
            wrapper = shallow(<DateField label={label}
                                         placeholder={placeholder}
                                         disabled={disabled}
                                         maxDate={maxDate}
                                         minDate={minDate}
                                         meta={meta}
                                         input={input}/>
            );
        });

        it('onChange selects proper state and calls props.meta.onChange', () => {
            const instance = wrapper.instance();
            instance.onChange('2019-03-04');
            expect(instance.state.selectedDate).toEqual('2019-03-04');
            expect(instance.props.meta.onChange).toBeCalledWith("2019-03-04", undefined, instance.props.input);
        });

        it('onChange selects proper state and calls props.meta.onChange', () => {
            const instance = wrapper.instance();
            instance.onBlur('2019-03-04');
            expect(instance.props.input.onBlur).toBeCalledWith("2019-03-04", instance.props.input);
        });

        it('select method return proper value', () => {
            const instance = wrapper.instance();
            expect(instance.select()).toEqual(moment(instance.state.selectedDate));
            instance.setState({selectedDate: undefined});
            expect(instance.select()).toEqual(null);
        });
    })

    describe('provides props to FieldWrapper', () => {
        beforeEach(() => {
            meta = {touched: true, error: 'required', onChange: jest.fn()};
            wrapper = shallow(<DateField label={label}
                                         placeholder={placeholder}
                                         disabled={disabled}
                                         maxDate={maxDate}
                                         minDate={minDate}
                                         meta={meta}
                                         input={input}/>
            );
        });

        it('error prop', () => {
            expect(wrapper.find('FieldWrapper').at(0).props().error).toEqual('required');
        })

        it('provides label prop to the FieldWrapper component', () => {
            expect(wrapper.find('FieldWrapper').at(0).props().label).toEqual('Date');
        })

        it('provides touched prop to the FieldWrapper component', () => {
            expect(wrapper.find('FieldWrapper').at(0).props().touched).toEqual(true);
        })
    })
});
