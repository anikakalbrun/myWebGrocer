import React, {Component} from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {string, bool, shape, func, number} from 'prop-types';

import FieldWrapper from './FieldWrapper';
import '../style/css/DateField.css';
import '../style/css/FormField.css';

export default class DateField extends Component {

    static propTypes = {
        input: shape({
            onChange: func,
            value: string,
        }).isRequired,
        meta: shape({
            touched: bool,
            error: string,
        }).isRequired,
        placeholder: string,
        disabled: bool,
        maxDate: string,
        minDate: string,
        showYearDropdown: bool,
        yearDropdownItemNumber: number
    };

    static defaultProps = {
        showYearDropdown: false,
        yearDropdownItemNumber: 80
    };

    state = {
        selectedDate: this.props.input.value,
    };

    onChange = (date, v) => {
        this.setState({selectedDate: date,});
        const {input, meta: {onChange}} = this.props;
        if (onChange && typeof onChange === 'function') {
            onChange(date, v, input);
        }
    };

    onBlur = (date) => {
        const {input} = this.props;
        input.onBlur(date, input);
    };

    select = () => {
        return this.state.selectedDate ? moment(this.state.selectedDate) : null
    };

    render() {
        const {
            label,
            placeholder,
            disabled,
            maxDate,
            minDate,
            meta: {touched, error},
            showYearDropdown,
            yearDropdownItemNumber
        } = this.props;

        return (
            <FieldWrapper label={label} touched={touched} error={error}>
                <DatePicker selected={this.select()}
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            className={`form-control ${touched && !error && this.state.selectedDate ? 'valid' : ''}`}
                            maxDate={maxDate && moment(maxDate)}
                            minDate={maxDate && moment(minDate)}
                            placeholderText={placeholder}
                            disabled={disabled}
                            showYearDropdown={showYearDropdown}
                            scrollableYearDropdown
                            yearDropdownItemNumber={yearDropdownItemNumber}
                            dateFormat="DD/MM/YYYY"/>
            </FieldWrapper>
        );
    }
}