import * as yup from 'yup';

export interface UserFormInterface {
    name: string;
    password: string;
    email: string;
}

export const UserYUPInterface = yup
    .object({
        name: yup
            .string()
            .required('First Name is required')
            .min(2, 'First Name must be at least 2 characters'),
        password: yup
            .string()
            .required('Password is required')
            .min(5, 'Password must be at least 2 characters'),
        email: yup
            .string()
            .required('Email is required')
            .email('Please enter a valid email address'),
    })
    .required();
