export const required = value => value ? undefined : ' Required';

export const minLength = min => value =>
    value && value.length < min ? ` must include at least ${min} characters` : undefined;

export const minLength2 = minLength(2);

export const maxLength = max => value =>
    value && value.length > max ? ` can not be longer then ${max} characters` : undefined;

export const maxLength30 = maxLength(30);
export const maxLength60 = maxLength(60);

export const alf = value =>
    value && !/^[A-z]+$/.test(value) ? " must contain letters only" : undefined;

export const alf_space_dash = value =>
    value && !/^[A-z -]*$/.test(value) ? " may only contain letters, space and dash characters" : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;


