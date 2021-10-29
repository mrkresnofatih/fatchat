import React from 'react';
import {Page} from "./components/atoms/Page/Page";
import {Center} from "./components/atoms/Center/Center";
import {EditProfileCard} from "./components/organisms/Card/EditProfileCard";

function App() {
    return (
        <Page wallpaper={"darkSnacks"}>
            <Center>
                <EditProfileCard initialValues={
                    {
                        Username: "kresnofatih",
                        DisplayName: "kresnofatih",
                        Email: "kresnofatih@fattech.co.jp",
                        StatusMessage: "Hello I'm Fatih XD!"
                    }
                }/>
            </Center>
        </Page>
    );
}

export default App;
