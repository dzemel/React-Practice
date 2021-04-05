function Tweet(props) {
    const {username, name, date, message} = props;

    return (
        <ul className="tweet">
            <li>{username}</li>
            <li>{name}</li>
            <li>{date}</li>
            <li>{message}</li>
        </ul>
    )
}