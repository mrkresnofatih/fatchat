// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from './button.module.css';

type Props = {
    onClick: () => void;
    stopPropagation?: boolean,
    children: ReactNode
};
export const Button = (props: Props) => {
    const clickWithStopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.onClick();
    }
    const clickFunction = (props.stopPropagation === undefined || false) ? props.onClick : clickWithStopPropagation;
    return (
        <div onClick={clickFunction} className={styles.button}>
            {props.children}
        </div>
    );
};