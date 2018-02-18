import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {func, bool} from 'prop-types';

import Button from '../../src/components/Button.jsx';
import FormField from '../components/FormField';
import DateField from '../components/DateField';
import Wrapper from '../components/Wrapper';
import post from '../utils/post'
import {required, alf, maxLength30, maxLength60, minLength2, alf_space_dash, email} from '../utils/formValidation';
import {setPageNumber} from '../actions'
import '../style/css/Page.css'

export class Page2 extends Component {

    static propTypes = {
        submitting: bool.isRequired,
        invalid: bool.isRequired,
        handleSubmit: func.isRequired
    };

    render() {
        const {handleSubmit, pristine, submitting} = this.props;
        return (
            <Wrapper innerContainerClass='inverse default large'>
                <div className='row'>
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <div className='col-xs-12 col-md-6'>
                            <Field name="firstName"
                                   component={FormField}
                                   label="First Name"
                                   placeholder="John"
                                   autoComplete='given-name'
                                   validate={[required, alf, minLength2, maxLength60]}/>

                            <Field name="dob"
                                   component={DateField}
                                   label="Date of Birth"
                                   placeholder="30/01/1975"
                                   showYearDropdown = {true}
                                   validate={[required]}/>

                            <Field name="email"
                                   component={FormField}
                                   label="Email Address"
                                   placeholder="john.doe@gmail.com"
                                   type='email'
                                   autoComplete='email'
                                   validate={[required, email]}/>
                        </div>

                        <div className='col-xs-12 col-md-6'>
                            <Field name="surname"
                                   component={FormField}
                                   label="Surname"
                                   placeholder="Doe"
                                   autoComplete='family-name'
                                   validate={[required, alf_space_dash, minLength2, maxLength60]}/>

                            <Field name="nationality"
                                   component={FormField}
                                   label="Nationality"
                                   placeholder="Irish"
                                   autoComplete='country-name'
                                   validate={[required, alf, minLength2, maxLength30]}/>

                            <Field name="occupation"
                                   component={FormField}
                                   label="Occupation"
                                   placeholder="Front End Developer"
                                   validate={[required, alf_space_dash, minLength2, maxLength60]}/>
                        </div>

                        <Button type='submit'
                                disabled={pristine || submitting}
                                text='Submit'
                                btnClassName='button--green pull-right m-r-15'/>
                    </form>
                </div>
            </Wrapper>
        );
    }
}

Page2 = reduxForm({
    form: 'RegistrationForm',
    destroyOnUnmount: true,
    onSubmit: post,
    url: '/users',
    callback: setPageNumber,
    pageNumber: 3
})(Page2);

export default Page2;
