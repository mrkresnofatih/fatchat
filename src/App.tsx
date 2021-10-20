import React from 'react';
import styles from './app.module.css';
import {Content} from "components/atoms/Content/Content";
import {Message} from "components/organisms/Message/Message";
import {HeaderHome} from "components/organisms/Header/HeaderHome";
import {TextInput} from "components/atoms/Input/TextInput";
import {InfoContactRequest} from "components/organisms/Info/InfoContactRequest";
import {InfoContactAdd} from "components/organisms/Info/InfoContactAdd";
import {ButtonSpan} from "components/organisms/Button/ButtonSpan";
import {Section} from "components/atoms/Section/Section";
import {Footer} from "./components/organisms/Footer/Footer";
import {IconFileNames} from "./constants/asset";

function App() {
    return (
        <div className={styles.app}>
            <HeaderHome/>
            <Content>
                <Section text={"Friends"}/>
                <TextInput
                    label={"username"}
                    backgroundColor={"#334756"}
                    color={"white"}
                    placeHolder={"Minimum 6 letters"}
                />
                <ButtonSpan text={"Search"} onClick={()=>console.log("hello")}/>
                <InfoContactAdd
                    imageUrl={"https://i.pinimg.com/236x/25/15/5d/25155d81c8fe86c204b0243e2407e3a3.jpg"}
                    contactName={"My Waifu"}
                    contactStatus={"Work Hard My Love"}
                    onAdd={()=>console.log("add")}
                    onProfileView={()=>console.log("profile view")}
                />
                <InfoContactRequest
                    imageUrl={"https://i.pinimg.com/236x/25/15/5d/25155d81c8fe86c204b0243e2407e3a3.jpg"}
                    contactName={"Fatih's Waifu"}
                    contactStatus={"Just keep swimming!"}
                    onAccept={()=>console.log("accept")}
                    onDecline={()=>console.log("decline")}
                    onProfileView={()=>console.log("viewing profile")}
                />
                <Message
                    avatarUrl={"https://i.pinimg.com/236x/25/15/5d/25155d81c8fe86c204b0243e2407e3a3.jpg"}
                    authorName={"Fatih Dev"}
                    time={"9 m"}
                    messageText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus magna."}
                    isSelf={false}
                />
                <Message
                    avatarUrl={"https://i.pinimg.com/originals/9b/89/53/9b8953e917e3a44e0b03b60b603bd469.jpg"}
                    authorName={"Kresno Fatih"}
                    time={"9 m"}
                    messageText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus magna."}
                    isSelf={true}
                />
                <Message
                    avatarUrl={"https://i.pinimg.com/474x/76/4f/23/764f2334a070688bb747d809111ad92d.jpg"}
                    authorName={"Crazy Rich"}
                    time={"9 m"}
                    messageText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus venenatis lectus magna."}
                    isSelf={false}
                />
            </Content>
            <Footer footerObjects={
                [
                    {
                        iconFileName: IconFileNames.CONTACTS_WHITE,
                        size: 30,
                        onClick: ()=>console.log("contacts")
                    },
                    {
                        iconFileName: IconFileNames.OUTLINE_CHAT_WHITE,
                        size: 30,
                        onClick: ()=>console.log("chats")
                    },
                    {
                        iconFileName: IconFileNames.PERSON_WHITE,
                        size: 30,
                        onClick: ()=>console.log("profile")
                    },
                    {
                        iconFileName: IconFileNames.MORE_VERTICAL_WHITE,
                        size: 30,
                        onClick: ()=>console.log("more")
                    }
                ]
            }/>
        </div>
    );
}

export default App;
