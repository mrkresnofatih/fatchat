// @flow
import * as React from 'react';
import {InfoContactBase} from "components/organisms/Info/InfoContactBase";
import styles from './infocontactrequest.module.css';
import {Button} from "components/atoms/Button/Button";

type Props = {
    imageUrl: string,
    contactName: string,
    contactStatus: string,
    onAccept: () => void,
    onDecline: () => void,
    onProfileView: ()=>void
};
export const InfoContactRequest = (props: Props) => {
    return (
        <div className={styles.requestContainer}>
            <Button onClick={props.onProfileView}>
                <InfoContactBase
                    imageUrl={props.imageUrl}
                    contactName={props.contactName}
                    contactStatus={props.contactStatus}
                />
            </Button>
            <Button onClick={props.onAccept}>
                <label className={`${styles.baseButton} ${styles.acceptButton}`}>
                    <p className={styles.acceptText}>Accept</p>
                </label>
            </Button>
            <Button onClick={props.onDecline}>
                <label className={`${styles.baseButton} ${styles.declineButton}`}>
                    <p className={styles.acceptText}>Decline</p>
                </label>
            </Button>
        </div>
    );
};