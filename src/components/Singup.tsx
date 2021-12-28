import {signInWithEmailAndPassword} from "firebase/auth"
import {useState} from "react";

function Singup (){
    const [userInfo,setUserInfo] = useState()
    const saveUser = () =>{

    }
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="rfc" placeholder="RFC"/>
                <input type="email" name="email" className={"form-control"} placeholder="Email"/>
                <input type="password" name="password" className={"form-control"} placeholder="Password"/>
                <input type="password" name="passwordConfirm" className={"form-control"} placeholder="Confirm you password"/>
            </form>
        </div>
    )
}

export default Singup;