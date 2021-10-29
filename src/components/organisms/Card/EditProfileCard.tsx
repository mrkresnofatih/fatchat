// @flow 
import * as React from 'react';
import {AuthCard, inputField} from "./AuthCard";
import {Avatar} from "../../atoms/Avatar/Avatar";
import {useState} from "react";

type Props = {
    initialValues: EditProfileForm
};

type EditProfileForm = {
    Username: string,
    DisplayName: string,
    Email: string,
    StatusMessage: string,
}

export const EditProfileCard = (props: Props) => {
    const [formState, setFormState] = useState<EditProfileForm>({
        Username: "",
        DisplayName: "",
        Email: "",
        StatusMessage: ""
    })

    const onSubmit = () => console.log("SUBMIT: ", formState);

    const onChange = (formStateProp: string) => (value: string) => {
        console.log({...formState, [formStateProp]: value});
        setFormState({...formState, [formStateProp]: value});
    }

    const editProfileInputFields: inputField[] = [
        {
            label: "Username",
            type: "text",
            isDisabled: false,
            placeholder: "Minimum 6 characters",
            initialValue: props.initialValues.Username
        },{
            label: "Display Name",
            type: "text",
            isDisabled: false,
            placeholder: "Set to 6-12 characters",
            initialValue: props.initialValues.DisplayName
        },{
            label: "Email",
            type: "text",
            isDisabled: false,
            placeholder: "Input email here...",
            initialValue: props.initialValues.Email
        },{
            label: "StatusMessage",
            type: "text",
            isDisabled: false,
            placeholder: "Max 100 letters",
            initialValue: props.initialValues.StatusMessage
        },
    ]
    return (
        <AuthCard
            title={"Edit Profile"}
            header={
                <Avatar src={"blabla"} size={100}/>
            }
            inputFields={editProfileInputFields}
            onSubmit={onSubmit}
            onChange={onChange}
            submitButtonText={"Save"}
        />
    );
};