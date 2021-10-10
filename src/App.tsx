import React from 'react';
import styles from './app.module.css';
import {Content} from "components/atoms/Content/Content";
import {InfoContactBase} from "components/organisms/Info/InfoContactBase";
import {Message} from "components/organisms/Message/Message";
import {HeaderHome} from "components/organisms/Header/HeaderHome";

function App() {
    return (
        <div className={styles.app}>
            <HeaderHome/>
            <Content>
                <InfoContactBase
                    imageUrl={"https://i.pinimg.com/236x/25/15/5d/25155d81c8fe86c204b0243e2407e3a3.jpg"}
                    contactName={"Kresno Fatih"}
                    contactStatus={"Bandung, ID"}
                />
                <InfoContactBase
                    imageUrl={"https://i.pinimg.com/originals/9b/89/53/9b8953e917e3a44e0b03b60b603bd469.jpg"}
                    contactName={"Fatih Dev"}
                    contactStatus={"Grinding... Always 🐲"}
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
        </div>
    );
}

export default App;
