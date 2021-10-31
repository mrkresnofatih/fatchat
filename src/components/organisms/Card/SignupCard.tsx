// @flow
import * as React from 'react';
import {useState} from 'react';
import {AuthCard, inputField} from "./AuthCard";
import {Icon} from "../../atoms/Icon/Icon";
import {IconFileNames} from "../../../constants/asset";

type Props = {
};

type SignupForm = {
    Username: string,
    Password: string,
    Gender: "MALE" | "FEMALE" | "",
    Email: string
}

export const SignupCard = (props: Props) => {
    const [formState, setFormState] = useState<SignupForm>({
        Username: "",
        Password: "",
        Gender: "",
        Email: ""
    })
    const onChange = (formStateProp: string) => (value: string) => {
        console.log({...formState, [formStateProp]: value});
        setFormState({...formState, [formStateProp]: value});
    }
    const onSubmit = () => console.log("SUBMIT: ", formState);

    const signUpInputFields: inputField[] = [
        {
            isDisabled: false,
            label: "Username",
            type: "text",
            placeholder: "Minimum 6 characters"
        }, {
            isDisabled: false,
            label: "Email",
            type: "text",
            placeholder: "e.g fatih@fattach.co.jp"
        }, {
            isDisabled: false,
            label: "Password",
            type: "text",
            placeholder: "Secure w/ min. 6 characters",
            isTypePassword: true
        }, {
            isDisabled: true,
            label: "Gender",
            type: "select",
            placeholder: "--select--",
            selectOptions: ["MALE", "FEMALE"]
        }
    ]
    return (
        <AuthCard
            header={
                <Icon iconFileName={IconFileNames.PERSON_OUTLINE_ORANGE} size={100}/>
            }
            inputFields={signUpInputFields}
            onChange={onChange}
            onSubmit={onSubmit}
            title={"Signup"}
            submitButtonText={"Create Account"}
        />
    );
};