// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from './center.module.css';

type Props = {
    children: ReactNode
};
export const Center = (props: Props) => {
    return (
        <div className={styles.centerContainer}>
            {props.children}
        </div>
    );
};