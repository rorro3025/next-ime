interface Props {
    message: string;
}

function Message({message}: Props) {
    return (
        <div className={"alert alert-danger"} role={"alert"}>
            <h3>Something went wrong</h3>
            <p>{message}</p>
        </div>
    )
}

export default Message;