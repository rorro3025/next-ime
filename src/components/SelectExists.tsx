import Login from './Login';
import SingUp from './SingUp';
import {useApp} from "../context/appContext";
import Message from "./Message";
import React, {ChangeEvent, useState} from "react";

function Select() {
    const {setIsLoggedIn} = useApp()
    const [visible, setVisible] = useState(false)
    const [messageText, setMessageText] = useState('')
    const [userType, setUserType] = useState('student')
    const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setUserType(e.target.value)
    }
    return (
        <div className={"container"}>
            {visible && <Message message={messageText}/>}
            <Login setIsLoggedIn={setIsLoggedIn} setMessage={setMessageText} setVisibility={setVisible}/>
            <select onChange={handleChange} className={"form-control"} defaultValue={"student"}>
                <option value="admin">Administrador</option>
                <option value="student">Estudiante</option>
                <option value="professor">Profesor</option>
            </select>
            <SingUp type={userType} setMessageText={setMessageText} setVisibility={setVisible}/>
        </div>
    )
}

export default Select;