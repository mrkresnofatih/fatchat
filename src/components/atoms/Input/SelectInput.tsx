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
    selectCurrentValue: string,
    placeHolder: string
};
export const SelectInput = (props: Props) => {
    const [collapse, setCollapse] = useState<boolean>(false);
    const onToggle = () => setCollapse(i => !i);

    const onSelect = (p: string) => () => {
        props.onChange(p);
        onToggle();
    };

    const valueOrRollback: string = (props.selectCurrentValue==="") ? props.placeHolder: props.selectCurrentValue;

    return (
        <Input
            label={props.label}
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