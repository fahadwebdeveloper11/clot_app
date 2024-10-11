import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, `Name must be at least 3 characters`),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .min(8, ({min}) => `Email must be at least ${min} characters`),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
