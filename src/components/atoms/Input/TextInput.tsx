// @flow
import * as React from 'react';
import {ChangeEventHandler, useState} from 'react';
import {Input} from "components/atoms/Input/Input";
import styles from './textinput.module.css';

type Props = {
    label: string,
    onChange?: (p: string) => void,
    backgroundColor?: string,
    color?: string,
    placeHolder?: string,
    isDisabled: boolean,
    initialValue?: string,
    isTypePassword?: boolean
};
export const TextInput = (props: Props) => {
    const initialText = props.initialValue ? props.initialValue : "";
    const [text, setText] = useState<string>(initialText);
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };
    const inputType = (props.isTypePassword!==undefined) ? (props.isTypePassword ? "password" : "text") : "text";
    return (
        <Input
            Content={
                <input
                    className={`${styles.textInputContainer} ${props.isDisabled && styles.disableFontColor}`}
                    value={text}
                    onChange={onChange}
                    style={{color: props.color}}
                    placeholder={props.placeHolder}
                    type={inputType}
                />
            }
            label={props.label}
            isDisabled={props.isDisabled}
            backgroundColor={props.backgroundColor}
        />
    );
};