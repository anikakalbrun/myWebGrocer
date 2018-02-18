import React from 'react';
import * as validation from '../../utils/formValidation';

describe('formValidation', () => {

    it('required func return undefined when argument is passed', () => {
        expect(validation.required('test')).toEqual(undefined)
    });

    it('required func return \' Required\' when no argument is passed', () => {
        expect(validation.required()).toEqual(' Required')
    });

    it('minLength func returns undefined if the passed argument has more characters than specified', () => {
        expect(validation.minLength(3)('test')).toEqual(undefined)
    });

    it('minLength func returns " must include at least X characters" if the passed argument has less characters than specified', () => {
        expect(validation.minLength(5)('test')).toEqual(" must include at least 5 characters")
    });

    it('maxLength func returns undefined if the passed argument has not more characters than specified', () => {
        expect(validation.maxLength(15)('test')).toEqual(undefined)
    });

    it('maxLength func returns " can not be longer then 15 characters" if the passed argument has not more characters than specified', () => {
        expect(validation.maxLength(15)('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toEqual(" can not be longer then 15 characters"
        )
    });

    it('maxLength30 func returns undefined if the passed argument has less than 30 characters', () => {
        expect(validation.maxLength30('test test test test test test ')).toEqual(undefined);
    });

    it('maxLength30 func returns " can not be longer then 30 characters" if the passed argument has more than 30 characters', () => {
        expect(validation.maxLength30('test test test test test test t')).toEqual(" can not be longer then 30 characters");
    });

    it('maxLength60 func returns undefined if the passed argument has less than 60 characters', () => {
        expect(validation.maxLength60('test test test test test test test test test test test test ')).toEqual(undefined);
    });

    it('maxLength60 func returns " can not be longer then 60 characters" if the passed argument has more than 60 characters', () => {
        expect(validation.maxLength60('test test test test test test test test test test test test t')).toEqual(" can not be longer then 60 characters");
    });

    it('alf func returns undefined if passed arguments contains letters only', () => {
        expect(validation.alf('testT')).toEqual(undefined);
    });

    it('alf func returns " must contain letters only" if passed argument contains any other character', () => {
        expect(validation.alf('testT<')).toEqual(" must contain letters only");
    });

    it('alf_space_dash func returns undefined if passed argument contains letters, space and dash characters only', () => {
        expect(validation.alf_space_dash('test -T')).toEqual(undefined);
    });

    it('alf_space_dash func returns " may only contain letters, space and dash characters" if passed argument contains any other character', () => {
        expect(validation.alf_space_dash('test -T<')).toEqual(" may only contain letters, space and dash characters");
    });

    it('email func returns undefined if passed argument is a valid email address', () => {
        expect(validation.email('john.doe23@gmail.com')).toEqual(undefined);
    });

    it('email func returns "Invalid email address" if passed argument is not a valid email address', () => {
        expect(validation.email('test@ui')).toEqual('Invalid email address');
        expect(validation.email('testui.com')).toEqual('Invalid email address');
    });
});
