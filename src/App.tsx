import React from 'react';
import {Text} from "components/atoms/Text/Text";
import {Avatar} from "components/atoms/Avatar/Avatar";
import {Icon} from "components/atoms/Icon/Icon";

function App() {
    return (
        <div className="App">
            <Text text={"I am Fatih"}/>
            <Avatar src={"randomAvatarUrl"} size={50}/>
            <Icon iconFileName={"filled_chat_orange"}/>
        </div>
    );
}

export default App;
