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
    placeHolder?: string
};
export const TextInput = (props: Props) => {
    const [text, setText] = useState<string>("");
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };
    return (
        <Input
            Content={
                <input
                    className={styles.textInputContainer}
                    value={text}
                    onChange={onChange}
                    style={{color: props.color}}
                    placeholder={props.placeHolder}
                />
            }
            label={props.label}
            backgroundColor={props.backgroundColor}
        />
    );
};