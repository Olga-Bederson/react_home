import { List } from "@material-ui/core";
import propTypes from "prop.types";
import { Message } from "./Message";

export const MessageList = ({ list }) => {
    return (
        <List>
            {list.map(item.id) => (
            <Message key={item.id} {...item}>
                )    
            }
        </List>
    )
};

MessageList.propTypes = {
    List: propTypes.arrayOf(
        propTypes.shape(type {
            id: propTypes.string.isRequired,
            name: propTypes.string
        })
    )
};