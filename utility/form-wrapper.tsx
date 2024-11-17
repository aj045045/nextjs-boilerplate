import { ReactNode } from 'react';
import { useForm, UseFormReturn, FieldValues, Resolver, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormWrapperProps<T extends FieldValues> {
  children: (
    register: UseFormReturn<T>['register'],
    errors: UseFormReturn<T>['formState']['errors']
  ) => ReactNode;
  className?: string;
  onSubmit: (data: T) => void;
  validationSchema: yup.ObjectSchema<T>;
}

export function FormWrapper<T extends FieldValues>({
  children,
  className = "",
  onSubmit,
  validationSchema,
}: FormWrapperProps<T>) {
  const { register, handleSubmit, formState: { errors } } = useForm<T>({ resolver: yupResolver(validationSchema) as unknown as Resolver<T>, });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={className}>
      {children(register, errors)}
    </form>
  );
}

export function getErrorMessage(error: FieldError | undefined) {
  return {
    isInvalid: !!error, // This will return true if error exists, false otherwise
    errorMessage: error ? error.message : '' // If error exists, return its message, otherwise return an empty string
  };
}
