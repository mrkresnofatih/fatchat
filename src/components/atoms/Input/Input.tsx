// @flow
import * as React from 'react';
import styles from './input.module.css';
import {ReactNode} from "react";

type Props = {
    label: string,
    Content: ReactNode,
    backgroundColor?: string
};
export const Input = (props: Props) => {
    return (
        <div className={styles.inputContainer} style={{backgroundColor: props.backgroundColor}}>
            <p className={styles.inputLabel} style={{backgroundColor: props.backgroundColor}}>{props.label}</p>
            {props.Content}
        </div>
    );
};