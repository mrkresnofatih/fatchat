// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from './authcard.module.css';
import {Text} from "../../atoms/Text/Text";
import {TextInput} from "../../atoms/Input/TextInput";
import {ButtonSpan} from "../Button/ButtonSpan";
import {SelectInput} from "../../atoms/Input/SelectInput";

export type inputField = {
    label: string,
    type: "text",
    placeholder: string,
    isDisabled: boolean,
    initialValue?: string
} | {
    label: string,
    type: "select",
    placeholder: string,
    selectOptions: string[],
    isDisabled: boolean,
    initialValue?: string
}

type Props = {
    title: string,
    header: ReactNode,
    inputFields: inputField[],
    onSubmit: () => void,
    onChange: (key: string) => (value: string) => void,
    submitButtonText: string
};

export const AuthCard = (props: Props) => {
    const {onChange} = props;
    const doSubmit = () => props.onSubmit();
    return (
        <div className={styles.authCard}>
            <Text text={props.title} className={styles.authCardTitle}/>
            <div className={styles.authCardAvatarBox}>
                {props.header}
            </div>
            {props.inputFields.map((inputField, index) => {
                switch (inputField.type) {
                    case "text":
                        return (
                            <TextInput
                                key={index}
                                label={inputField.label}
                                placeHolder={inputField.placeholder}
                                onChange={onChange(inputField.label)}
                                isDisabled={inputField.isDisabled}
                                initialValue={inputField.initialValue}
                            />
                        );
                    case "select":
                        return (
                            <SelectInput
                                initialValue={inputField.initialValue}
                                key={index}
                                label={inputField.label}
                                onChange={onChange(inputField.label)}
                                selectOptions={inputField.selectOptions}
                                placeHolder={inputField.placeholder}
                                isDisabled={inputField.isDisabled}
                            />
                        );
                    default:
                        return <></>;
                }

            })}
            <ButtonSpan text={props.submitButtonText} onClick={doSubmit}/>
        </div>
    );
};