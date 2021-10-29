// @flow
import * as React from 'react';
import {useState} from 'react';
import {Input} from "./Input";
import styles from './selectinput.module.css';

type Props = {
    label: string,
    onChange: (p: string) => void,
    backgroundColor?: string,
    color?: string,
    selectOptions: string[],
    placeHolder: string,
    isDisabled: boolean,
    initialValue?: string
};
export const SelectInput = (props: Props) => {
    const initialValue = props.initialValue ? props.initialValue : "";
    const [value, setValue] = useState<string>(initialValue);
    const [collapse, setCollapse] = useState<boolean>(false);
    const onToggle = () => setCollapse(i => !i);

    const onSelect = (p: string) => () => {
        props.onChange(p);
        setValue(p);
        onToggle();
    };

    const valueOrRollback: string = (value==="") ? props.placeHolder: value;

    return (
        <Input
            label={props.label}
            isDisabled={props.isDisabled}
            Content={
                <div className={styles.selectInputContainer}>
                    <div
                        className={`${styles.selectInputMainBox} ${styles.borderRound}`}
                        onClick={onToggle}
                    >{valueOrRollback}</div>
                    <div className={`${styles.selectInputOptions} ${!collapse && styles.hide}`}>
                        {props.selectOptions.map((p, index) => (
                            <div
                                key={index}
                                onClick={onSelect(p)}
                                className={`${styles.selectInputMainBox} ${styles.shadow}`}
                            >{p}</div>
                        ))}
                    </div>
                </div>
            }
        />
    );
};