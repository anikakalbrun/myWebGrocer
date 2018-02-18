import React from 'react';
import {string, bool, node} from 'prop-types';

FieldWrapper.propTypes = {
    label: string,
    touched: bool,
    error: string,
    children: node
};

FieldWrapper.defaultProps = {};

export default function FieldWrapper({children, label, touched, error}) {
    return (
        <div className="form-group">
            <label className="col-xs-12">{label}:</label>
            <div className="col-xs-12">
                {children}
                {touched && error ?
                    <div>
                        <div className='has-error'/>
                        <small className="error">
                            <strong>{label}:</strong> {error}</small>
                    </div>
                    :
                    <div className='no-error'/>
                }
            </div>
        </div>
    );
}