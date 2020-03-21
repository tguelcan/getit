import { extend } from 'vee-validate'
/* eslint-disable camelcase */
import {
    required,
    alpha,
    email,
    min,
    max,
    digits,
    oneOf,
    alpha_num,
    numeric,
    min_value,
    max_value
} from 'vee-validate/dist/rules'

extend('verify_password', {
    message:
        'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)',
    validate: (value) => {
        const strongRegex = new RegExp(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
        return strongRegex.test(value)
    }
})

extend('required', {
    ...required,
    message: 'This field is required'
})

extend('min', min)
extend('max', max)
extend('digits', digits)
extend('oneOf', oneOf)
extend('alphaNum', alpha_num)
extend('numeric', numeric)
extend('min_value', min_value)
extend('max_value', max_value)

extend('alpha', {
    ...alpha,
    message: 'This field must only contain alphabetic characters'
})

extend('email', {
    ...required,
    ...email,
    message: 'This field is required a valid email address'
})

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target
    },
    message: 'Password confirmation does not match'
})
