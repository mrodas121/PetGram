import React from 'react';
import { useInputValue } from '../../Hooks/useInputValue';

import { Form, Input, Button, Title, Error } from './styles';

export const UserForm = ({onSubmit, title, error, disabled}) => {

    const email = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email: email.value, 
            password: password.value
        })
    }
    
    return ( 
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' {...email} />
                <Input disabled={disabled} placeholder='Password' type='Password' {...password} />
                <Button disabled={disabled}>{title}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    )
}