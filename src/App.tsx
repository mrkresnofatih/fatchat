import React from 'react';
import {Page} from "./components/atoms/Page/Page";
import {AuthCard} from "./components/organisms/Card/AuthCard";
import {Center} from "./components/atoms/Center/Center";

function App() {
    return (
        <Page wallpaper={"darkSnacks"}>
            <Center>
                <AuthCard
                    title={"Signup"}
                    imageUrl={"https://i.imgur.com/hlMIFj7.jpg"}
                    inputFields={
                        [
                            {
                                name:   "Username",
                                type:   "text",
                                info:   "minimum 6 letters"
                            },{
                                name:   "Password",
                                type:   "text",
                                info:   "max 7 letters"
                            },{
                                name:   "FullName",
                                type:   "text",
                                info:   "minimum 3 letters"
                            }
                        ]
                    }
                 onSubmit={s=> console.log("=>", s)}/>
            </Center>
        </Page>
    );
}

export default App;
