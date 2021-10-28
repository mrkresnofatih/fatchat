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
            label: "Username",
            type: "text",
            placeholder: "Minimum 6 characters"
        }, {
            label: "Email",
            type: "text",
            placeholder: "e.g fatih@fattach.co.jp"
        }, {
            label: "Password",
            type: "text",
            placeholder: "Secure w/ 6 characters"
        }, {
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
            submitButtonText={"Create Account"}/>
    );
};