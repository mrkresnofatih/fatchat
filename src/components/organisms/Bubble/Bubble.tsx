// @flow 
import * as React from 'react';
import styles from './bubble.module.css';
import {Text} from "components/atoms/Text/Text";

type Props = {
    text: string,
    isSelf: boolean
};
export const Bubble = (props: Props) => {
    const isSelfTextStyle: string = props.isSelf ? styles.bubbleTextIsSelf : styles.bubbleTextIsNotSelf;
    const isSelfBubbleStyle: string = props.isSelf ? styles.bubbleChatIsSelf : styles.bubbleChatIsNotSelf;
    return (
        <div className={`${styles.bubbleTextContainer} ${isSelfBubbleStyle}`}>
            <Text text={props.text} className={`${styles.bubbleText} ${isSelfTextStyle}`}/>
        </div>
    );
};