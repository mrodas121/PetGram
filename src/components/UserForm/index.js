import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";
export const UserForm = ({onSubmit, title}) =>{
    const email = useInputValue('')
    const password = useInputValue('')

    return(
        <Form onSubmit={onSubmit}>
            <Title>{title}</Title>
            <Input placeholder="Email" {...email} />
            <Input placeholder="Password" {...password} />
            <Button>{title}</Button>
        </Form>
    )
}