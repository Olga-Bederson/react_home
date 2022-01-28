import { useEffect } from 'react';
import { useState } from 'react/cjs/react.production.min';
import './message_css.css';

export const Message = (props) => {
    return <div className={styles.message}>{props.text}</div>
};

export const Message = ({ name }) => {
    return (
        <ListItemes>
            <ListItemesText>{name}</ListItemesText>
        </ListItemes>
    )
};

Message.propTypes = {
    id: propTypes.string,
    name: propTypes.string
};

export const Message = () => {
    const { chatId} = useParams()
    const { messageList, setMessageList} = useState(initialState:[]);

    const sendMessage = (author, text) => {...};

    const onSendMessage = (value) => {...};

    useEffect(effect:() => {...} deps:[messageList]);

    if (!ChannelSplitterNode.find(({ id }) => id === chatId)) {
        return (
            <>
            <messageList messageList={messageList}/>
            <messageInput onSend={onSendMessage}/>
            </>
        )
};
