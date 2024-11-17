'use client';
import { Button, Input } from '@nextui-org/react';
import { UserFormInterface, UserYUPInterface } from '@/interfaces/user';
import { FormWrapper, getErrorMessage } from '@/utility/form-wrapper';
import { UtilityHandler } from '@/utility/utility-handler';

export function FormPage() {
    return (
        <FormWrapper<UserFormInterface>
            onSubmit={(data: UserFormInterface) => UtilityHandler.onSubmitPost<UserFormInterface>('/api/user', data)}
            validationSchema={UserYUPInterface}
        >
            {(register, errors) => (
                <>
                    <div className="flex space-x-10 mb-5">
                        <Input
                            label="First Name"
                            placeholder=" "
                            type="text"
                            variant="bordered"
                            {...register('name')}
                            {...getErrorMessage(errors.name)}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder=" "
                            {...register('email')}
                            {...getErrorMessage(errors.email)}
                            variant="bordered"
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder=" "
                            variant="bordered"
                            {...register('password')}
                            {...getErrorMessage(errors.password)}
                        />
                    </div>
                    <Button type="submit" fullWidth>
                        Submit
                    </Button>
                </>
            )}
        </FormWrapper>
    )
}