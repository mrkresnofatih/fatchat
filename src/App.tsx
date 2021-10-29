import React from 'react';
import {Page} from "./components/atoms/Page/Page";
import {Center} from "./components/atoms/Center/Center";
import {LoginCard} from "./components/organisms/Card/LoginCard";

function App() {
    return (
        <Page wallpaper={"darkSnacks"}>
            <Center>
                <LoginCard/>
            </Center>
        </Page>
    );
}

export default App;
