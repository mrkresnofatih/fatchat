// @flow
import * as React from 'react';
import styles from './message.module.css';
import {Avatar} from "components/atoms/Avatar/Avatar";
import {Text} from "components/atoms/Text/Text";
import {Bubble} from "components/organisms/Bubble/Bubble";

type Props = {
    avatarUrl: string,
    authorName: string,
    time: string,
    messageText: string,
    isSelf: boolean
};
export const Message = (props: Props) => {
    return (
        <div className={`${styles.messageContainer}`}>
            <Avatar src={props.avatarUrl} size={40} disableOutline={true} />
            <div className={`${styles.messageTextContainer}`}>
                <div className={`${styles.messageTextContainerHead}`}>
                    <Text text={props.authorName} className={`${styles.messageAuthorText}`}/>
                    <Text text={props.time} className={`${styles.messageTimeText}`}/>
                </div>
                <Bubble text={props.messageText} isSelf={props.isSelf}/>
            </div>
        </div>
    );
};