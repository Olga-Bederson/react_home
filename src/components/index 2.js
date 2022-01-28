import { useEffect } from 'react'
import { useState } from 'react/cjs/react.production.min'
import { Message } from './'

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



