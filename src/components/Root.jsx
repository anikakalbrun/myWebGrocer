import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Main from '../containers/Main';

export default function Root() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
}