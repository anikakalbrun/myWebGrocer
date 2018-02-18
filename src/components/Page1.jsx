import React from 'react';
import {func} from 'prop-types';

import Button from './Button';
import Wrapper from './Wrapper';
import '../style/css/Page.css';

Page1.propTypes = {
    goToSecondPage: func.isRequired
};

export default function Page1({goToSecondPage}) {
    return (
        <Wrapper>
            <h1 className='presentation__title'>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Donec pede justo</p>
            <Button text={'Next'}
                    btnClassName='button--white pull-right m-t-10'
                    callback={goToSecondPage}
            />
        </Wrapper>
    );
}