import React from 'react';
import styles from './app.module.css';
import {HeaderHome} from "components/organisms/Header/HeaderHome";
import {Content} from "components/atoms/Content/Content";
import {InfoContactBase} from "components/organisms/Info/InfoContactBase";

function App() {
    return (
        <div className={styles.app}>
            <HeaderHome/>
            <Content>
                <InfoContactBase
                    imageUrl={"https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg"}
                    contactName={"Kresno Fatih"}
                    contactStatus={"Bandung, ID"}
                />
                <InfoContactBase
                    imageUrl={"https://i.pinimg.com/originals/9b/89/53/9b8953e917e3a44e0b03b60b603bd469.jpg"}
                    contactName={"Fatih Dev"}
                    contactStatus={"Grinding... Always 🐲"}
                />
            </Content>
        </div>
    );
}

export default App;
