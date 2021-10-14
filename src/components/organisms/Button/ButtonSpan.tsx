// @flow
import * as React from 'react';
import {Button} from "components/atoms/Button/Button";
import styles from './buttonspan.module.css';

type Props = {
    text: string,
    onClick: ()=>void
};
export const ButtonSpan = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <div className={styles.buttonSpan}>
                <p className={styles.buttonText}>{props.text}</p>
            </div>
        </Button>
    );
};