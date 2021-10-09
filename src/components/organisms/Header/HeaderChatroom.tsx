// @flow
import * as React from 'react';
import {HeaderChatroomBase} from "components/organisms/Header/HeaderChatroomBase";

type Props = {
    title: string,
    subtitle: string
};
export const HeaderChatroom = (props: Props) => {
    const backAction = () => console.log(`back from chat with ${props.title}`);
    const moreAction = ()=>console.log("more action!");
    return (
        <HeaderChatroomBase
            title={props.title}
            subtitle={props.subtitle}
            backAction={backAction}
            moreAction={moreAction}/>
    )
};
