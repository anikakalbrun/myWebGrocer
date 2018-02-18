import React from 'react';
import {string, node} from 'prop-types';

import '../style/css/Wrapper.css';

Wrapper.propTypes = {
    children: node,
    innerContainerClass: string
};

Wrapper.defaultProps = {
    innerContainerClass: ''
};

export default function Wrapper({children, innerContainerClass}) {
    return (
        <div className="hero__vertical-container">
            <div className={`hero__title ${innerContainerClass}`}>
                {children}
            </div>
        </div>
    );
}