import React from 'react';

import logo from '../style/images/mwgLogoWhite.png';
import '../style/css/Header.css';

export default function Header() {
    return (
        <div className='nav--fixed--container'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-6 col-md-6 col-lg-3 u-pl0'>
                        <a title='MWG'>
                            <img src={logo}
                                 alt='Moving Grocery Forward'
                                 className='hero__logo logo--green'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}