// @flow
import * as React from 'react';
import styles from './infocontactadd.module.css';
import {Button} from "components/atoms/Button/Button";
import {InfoContactBase} from "components/organisms/Info/InfoContactBase";

type Props = {
    imageUrl: string,
    contactName: string,
    contactStatus: string,
    onAdd: () => void,
    onProfileView: () => void
};
export const InfoContactAdd = (props: Props) => {
    return (
        <div className={styles.addContainer}>
            <Button onClick={props.onProfileView}>
                <InfoContactBase
                    imageUrl={props.imageUrl}
                    contactName={props.contactName}
                    contactStatus={props.contactStatus}
                />
            </Button>
            <Button onClick={props.onAdd}>
                <label className={`${styles.baseButton} ${styles.addButton}`}>
                    <p className={styles.addText}>Add</p>
                </label>
            </Button>
        </div>
    );
};