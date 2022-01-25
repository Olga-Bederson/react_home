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