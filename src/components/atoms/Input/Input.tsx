// @flow
import * as React from 'react';
import styles from './input.module.css';
import {ReactNode} from "react";

type Props = {
    label: string,
    Content: ReactNode,
    backgroundColor?: string,
    isDisabled?: boolean
};
export const Input = (props: Props) => {
    const disableInput = (props.isDisabled===undefined) ? false : props.isDisabled;
    const disablingDivRender = disableInput ? <div className={styles.disablingDiv} /> : <></>;
    return (
        <div className={styles.inputContainer} style={{backgroundColor: props.backgroundColor}}>
            <p className={styles.inputLabel} style={{backgroundColor: props.backgroundColor}}>{props.label}</p>
            {props.Content}
            {disablingDivRender}
        </div>
    );
};