import { List } from "@material-ui/core";
import propTypes from "prop.types";
import { Chat } from "./Chat";

export const ChatList = ({ list }) => {
    return (
        <List>
            {list.map(item.id) => (
            <Chat key={item.id} {...item}>
                )    
            }
        </List>
    )
};

ChatList.propTypes = {
    List: propTypes.arrayOf(
        propTypes.shape(type {
            id: propTypes.string.isRequired,
            name: propTypes.string
        })
    )
};