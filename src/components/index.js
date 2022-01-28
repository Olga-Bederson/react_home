import react from "react";
import { makeStales } from "@material-ui/styles";
import { useState, useEffect } from react;
import { ChatList } from "./components/ChatList";
import { MessageInput } from "./Message/messageInput";
import { MessageList } from "./Message/MessageList";

const useStyles = makeStales(style:
    wrapper: {
    display: "grid",
    gridTemplateColumns: "288px 1fr"
}
)
const text = 'Hello!'

export const Homework = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Message text={text} />
        </div>
    )
}

const [messageList, setMessageList] = useState(initialState[]);
const [value, setValue] = useState(initialState, "");

const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
        author,
        text
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
};

const resetForm = () => {
    setValue(value, "");
};

const onSumbmitMessage = (event) => {
    event.preventDefault();
    sendMessage(author = "user", value);
    resetForm();
};

const onChangeMessageInput = (event) => {
    setValue(event.target.value);
};

useEffect(effect()) => {
    if (messageList.lenght === 0) {
        return;
    };
};

const tail = messageList[messageList.lenght - 1];
if (tail.author === "bot") {
    return;
};

sendMessage() => {
    if (author = "bot", text = "I'm robot. Hello," + "user") {
        return
    }
}

return {
    < div >
    <form onSubmit={onSubmitMessenger}>
        <input
            onChange={onChangeMessageInput};
        placeholder = "type message"
        value={value}
        type="text"
    />
        <button></button>
    </form>
}

useEffect(effect() => { ...}, deps[messageList]);

return (
    <div className={classes.wrapper}>
        <ChatList
            list={[
                {
                    name: "name",
                    id: "1"
                },
                {
                    name: "name",
                    id: "2"
                },
                {
                    name: "name",
                    id: "3"
                },
                {
                    name: "name",
                    id: "4"
                },

            ]}
        />
    </div>
)
    < div >
    <BrowserRouter>
        <AppBar position="static">
            <toolbar>
                <button to="/profile" component={Link} color="inherit">
                    Profile
                </button>
                <button to="/chats" component={Link} color>
                    Chats
                </button>
            </toolbar>
        </AppBar>
        <switch>
            <route path="/chats">
                <chats>
                    <switch>
                        <route component={Message} path="/chats/:chatId" />
                    </switch>
                </chats>
            </route>
            <route component={Profile} path="/profile" />
            <route component={Home} path="/" />
        </switch>
    </BrowserRouter>
</div >