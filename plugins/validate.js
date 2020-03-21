import { extend } from 'vee-validate'
import { required, alpha, email } from 'vee-validate/dist/rules'

extend('verify_password', {
    message:
        'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)',
    validate: (value) => {
        const strongRegex = new RegExp(
            `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})`
        )
        return strongRegex.test(value)
    }
})

extend('required', {
    ...required,
    message: 'This field is required'
})

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
