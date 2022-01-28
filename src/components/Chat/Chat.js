import { ListItemes, ListItemesText } from "@material-ui/core";
import propTypes from "prop.types";
import { Chats } from "../../mocks/chats";
import { Messages } from "../Message"

export const Chat = ({ name }) => {
    return (
        <ListItemes>
            <ListItemesText>{name}</ListItemesText>
        </ListItemes>
    )
};

export const Chats = ({ children }) => {
    const classes = useStyles()
;

return (
    <div className={classes.wrapper}>
        <ChatList list= {CHATS} />
        
        <div>
        {
            children
        }
        </div>
    </div>
)}

Chat.propTypes = {
    id: propTypes.string,
    name: propTypes.string
};
