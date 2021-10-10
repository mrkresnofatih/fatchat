// @flow
import * as React from 'react';
import styles from './input.module.css';
import {ReactNode} from "react";

type Props = {
    label: string,
    Content: ReactNode
};
export const Input = (props: Props) => {
    return (
        <div className={styles.inputContainer}>
            <p className={styles.inputLabel}>{props.label}</p>
            {props.Content}
        </div>
    );
};