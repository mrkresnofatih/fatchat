// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Info} from "components/atoms/Info/Info";
import {Image} from "components/atoms/Image/Image";
import {Text} from "components/atoms/Text/Text";
import styles from './infocontact.module.css';

type Props = {
    imageUrl: string,
    contactName: string,
    contactStatus: string
};
export const InfoContactBase = (props: Props) => {
    const ContactImage: ReactNode = <Image src={props.imageUrl}/>;
    const ContactInfo: ReactNode = <InfoContactContent
        contactName={props.contactName}
        contactStatus={props.contactStatus}
    />;
    return (
        <Info Thumbnail={ContactImage} InfoContent={ContactInfo}/>
    );
};

const InfoContactContent = (props: { contactName: string, contactStatus: string }) => {
    return (
        <div className={`${styles.infoContactContent}`}>
            <Text text={props.contactName} className={`${styles.infoContactContentHeading}`}/>
            <Text text={props.contactStatus} className={`${styles.infoContactContentSubheading}`}/>
        </div>
    )
}