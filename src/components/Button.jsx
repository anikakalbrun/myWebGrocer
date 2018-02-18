import React from 'react';
import {string, func, bool} from 'prop-types';

import '../style/css/Button.css';

Button.propTypes = {
    text: string.isRequired,
    type: string,
    disabled: bool,
    btnClassName: string,
    callback: func
};

Button.defaultProps = {
    btnClassName: '',
    type: 'button',
    disabled: false
};

export default function Button({text, callback, btnClassName, type, disabled}) {
    return (
        <button className={`btn ${btnClassName}`}
                onClick={callback}
                type={type}
                disabled={disabled}>
            {text}
        </button>
    );
}