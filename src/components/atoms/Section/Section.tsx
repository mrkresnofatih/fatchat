// @flow
import * as React from 'react';
import styles from './section.module.css';

type Props = {
    text: string,
    backgroundColor?: string
};
export const Section = (props: Props) => {
    return (
        <div className={styles.sectionDiv}>
            <p
                className={styles.sectionText}
                style={{backgroundColor: props.backgroundColor}}
            >{props.text}</p>
        </div>
    );
};