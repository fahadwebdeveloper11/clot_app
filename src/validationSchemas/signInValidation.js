import * as yup from 'yup';

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required')
    .min(8, ({min}) => `Email must be at least ${min} characters`),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    // .matches(
    //   '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    // ),
});
