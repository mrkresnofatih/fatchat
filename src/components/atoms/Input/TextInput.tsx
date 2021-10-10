// @flow
import * as React from 'react';
import {ChangeEventHandler, useState} from 'react';
import {Input} from "components/atoms/Input/Input";
import styles from './textinput.module.css';

type Props = {
    label: string,
    onChange?: (p: string) => void
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
                />
            }
            label={props.label}
        />
    );
};