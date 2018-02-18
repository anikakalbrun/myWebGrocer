import React from 'react';
import {object, string, bool, shape} from 'prop-types';

import FieldWrapper from './FieldWrapper';
import '../style/css/FormField.css';

FormField.propTypes = {
    input: object,
    label: string,
    placeholder: string,
    autoComplete: string,
    disabled: bool,
    meta: shape({
        touched: bool,
        error: string
    })
};

FormField.defaultProps = {
    type: 'text',
    disabled: false,
    autoComplete: "off"
};

export default function FormField({input, type, label, placeholder, disabled, autoComplete, meta: {touched, error}}) {
    return (
        <FieldWrapper label={label} touched={touched} error={error}>
            <input {...input}
                   placeholder={placeholder}
                   type={type}
                   disabled={disabled}
                   className={`form-control ${touched && !error ? 'valid' : ''}`}
                   autoComplete={autoComplete}/>
        </FieldWrapper>
    )
}