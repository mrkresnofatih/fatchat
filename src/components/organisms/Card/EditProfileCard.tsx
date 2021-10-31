// @flow
import * as React from 'react';
import {useState} from 'react';
import {AuthCard, inputField} from "./AuthCard";
import {Avatar} from "../../atoms/Avatar/Avatar";

type Props = {
    initialValues: EditProfileForm,
    onSave: (p: EditProfileForm) => void
};

type EditProfileForm = {
    Username: string,
    DisplayName: string,
    Email: string,
    StatusMessage: string,
}

export const EditProfileCard = (props: Props) => {
    const [formState, setFormState] = useState<EditProfileForm>(props.initialValues)

    const onChange = (formStateProp: string) => (value: string) => {
        console.log({...formState, [formStateProp]: value});
        setFormState({...formState, [formStateProp]: value});
    }

    const onSubmit = () => props.onSave(formState)

    const editProfileInputFields: inputField[] = [
        {
            label: "Username",
            type: "text",
            isDisabled: false,
            placeholder: "Minimum 6 characters",
            initialValue: props.initialValues.Username
        }, {
            label: "Display Name",
            type: "text",
            isDisabled: false,
            placeholder: "Set to 6-12 characters",
            initialValue: props.initialValues.DisplayName
        }, {
            label: "Email",
            type: "text",
            isDisabled: true,
            placeholder: "Input email here...",
            initialValue: props.initialValues.Email
        }, {
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