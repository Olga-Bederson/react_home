import { ListItemes, ListItemesText } from "@material-ui/core";
import propTypes from "prop.types";

export const Chat = ({ name }) => {
    return (
        <ListItemes>
            <ListItemesText>{name}</ListItemesText>
        </ListItemes>
    )
};

Chat.propTypes = {
    id: propTypes.string,
    name: propTypes.string
};
