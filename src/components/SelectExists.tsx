import Login from './Login';
import SingUp from './SingUp';
import {useApp} from "../context/appContext";
import Message from "./Message";
import {useState} from "react";

function Select() {
    const {setIsLoggedIn} = useApp()
    const [visible, setVisible] = useState(false)
    const [messageText, setMessageText] = useState('')
    return (
        <div className={"container"}>
            { visible && <Message message={messageText} /> }
            <Login setIsLoggedIn={setIsLoggedIn} setMessage={setMessageText} setVisibility={setVisible}/>
            <SingUp type={"student"}/>
        </div>
    )
}

export default Select;