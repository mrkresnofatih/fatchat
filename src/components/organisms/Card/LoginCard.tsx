// @flow
import * as React from 'react';
import {useState} from "react";
import {AuthCard, inputField} from "./AuthCard";
import {Icon} from "../../atoms/Icon/Icon";
import {IconFileNames} from "../../../constants/asset";

type Props = {};

type LoginForm = {
    Username: string,
    Password: string
}

export const LoginCard = (props: Props) => {
    const [formState, setFormState] = useState<LoginForm>({
        Username: "",
        Password: ""
    })

    const loginInputFields: inputField[] = [
        {
            label: "Username",
            type: "text",
            placeholder: "Minimum 6 characters"
        }, {
            label: "Password",
            type: "text",
            placeholder: "Minimum w/ min. 6 characters"
        }
    ];

    const onChange = (formStateProp: string) => (value: string) => {
        console.log({...formState, [formStateProp]: value});
        setFormState({...formState, [formStateProp]: value});
    };

    const onSubmit = () => console.log("SUBMIT: ", formState);

    return (
        <AuthCard
            title={"Login"}
            header={
                <Icon iconFileName={IconFileNames.LOGIN_CIRCLE_ORANGE} size={100}/>
            }
            inputFields={loginInputFields}
            onSubmit={onSubmit}
            onChange={onChange}
            submitButtonText={"Login"}
        />
    );
};