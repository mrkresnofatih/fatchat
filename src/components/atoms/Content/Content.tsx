// @flow
import * as React from 'react';
import {ReactNode} from "react";
import styles from './content.module.css';

type Props = {
    children: ReactNode
};
export const Content = (props: Props) => {
    return (
        <div className={styles.contentBox}>
            <div className={`${styles.contentBase}`}>
                {props.children}
            </div>
        </div>
    );
};