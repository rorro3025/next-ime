import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {doc, setDoc} from "firebase/firestore"
import {auth, db} from "../fsconfig"
import {UserCreating, Student, User} from "../context/interfaces";
import styles from "./Login.module.css";

// props: define the properties that the component will receive
interface Props {
    type: string
}

function SingUp({type}: Props) {
    const initialState: UserCreating = {
        name: "",
        matricule: "",
        email: "",
        password: "",
        career: "",
        semester: 0,
        confirmPassword: "",
        status: "",
        role: type
    }
    const [userInfo, setUserInfo] = useState<UserCreating>(initialState)

    // function save user info in firestore
    const saveUserInfo = async (user: UserCreating) => {
        const userRef = doc(db, "users", user.matricule)
        if (user.role === "student") {
            const dataObj: Student = {
                name: user.name,
                matricule: user.matricule,
                email: user.email,
                career: user.career ? user.career : "",
                semester: user.semester? user.semester : 0,
                role: user.role,
                status: "active"
            }
            await setDoc(userRef, dataObj)
        } else {
            const dataObj: User = {
                name: user.name,
                matricule: user.matricule,
                email: user.email,
                role: user.role,
                status: "active"
            }
            await setDoc(userRef, dataObj)
        }
    }


}

// method to handle the input change and save the value in the state
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setUserInfo({...userInfo, [name]: value})
}

// method to handle the submit event and send the data to the firebase
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userInfo.password === userInfo.confirmPassword) {
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then(() => {
                console.log("user created")
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        alert("password does not match")
    }
}
return (
    <div className={styles.formsignin}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className={"form-control my-2"}
                   onChange={handleChange}/>
            <input type="text" name={type == "student" ? "account" : "rfc"}
                   placeholder={type == "student" ? "account" : "rfc"} className={"form-control my-2"}
                   onChange={handleChange}/>
            <input type="email" name="email" className={"form-control my-2"} placeholder="Email"
                   onChange={handleChange}/>
            <input type="password" name="password" className={"form-control my-2"} placeholder="Password"
                   onChange={handleChange}/>
            <input type="password" name="passwordConfirm" className={"form-control my-2"}
                   placeholder="Confirm you password" onChange={handleChange}/>
            <div className="d-grid gap-2 my-2">
                <input type="submit" value="Sing Up" className="btn btn-primary"/>
            </div>
        </form>
    </div>
)
}

export default SingUp;