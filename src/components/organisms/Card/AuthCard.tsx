// @flow
import * as React from 'react';
import {useState} from 'react';
import styles from './authcard.module.css';
import {Text} from "../../atoms/Text/Text";
import {Avatar} from "../../atoms/Avatar/Avatar";
import {TextInput} from "../../atoms/Input/TextInput";
import {ButtonSpan} from "../Button/ButtonSpan";
import {SelectInput} from "../../atoms/Input/SelectInput";

type inputField = {
    name: string,
    type: "text",
    info: string
} | {
    name: string,
    type: "select",
    info: string[]
}

type Props = {
    title: string,
    imageUrl: string,
    inputFields: inputField[],
    onSubmit: (s: Object) => void
};

type StateProps = {
    Username: string,
    Password: string,
    InputValue: string
}

export const AuthCard = (props: Props) => {
    const [state, setState] = useState<StateProps>({Username: "", Password: "", InputValue: ""})
    const onChange = (n: string) => (p: string) => {
        console.log({...state, [n]: p});
        setState({...state, [n]: p});
    }
    const onClick = () => props.onSubmit(state);
    return (
        <div className={styles.authCard}>
            <Text text={props.title} className={styles.authCardTitle}/>
            <div className={styles.authCardAvatarBox}>
                <Avatar src={props.imageUrl} size={100}/>
            </div>
            {props.inputFields.map((inputField, index) => {
                return (
                    <TextInput
                        key={index}
                        label={inputField.name}
                        placeHolder={"placeholder"}
                        onChange={onChange(inputField.name)}
                    />
                )
            })}
            <SelectInput
                label={"Gender"}
                onChange={onChange("InputValue")}
                selectOptions={["Male", "Female", "Trash"]}
                placeHolder={"none"}
                selectCurrentValue={state.InputValue}
            />
            <ButtonSpan text={"Create Account"} onClick={onClick}/>
        </div>
    );
};