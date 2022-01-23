import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {doc, setDoc} from "firebase/firestore"
import {auth, db} from "../fsconfig"
import {UserCreating, Student, User} from "../context/interfaces";
import styles from "./Login.module.css";
import {toast} from "react-toastify";

// props: define the properties that the component will receive
interface Props {
    type: string,
    setMessageText: (text: string) => void,
    setVisibility: (visibility: boolean) => void,
}

function SingUp({type, setMessageText, setVisibility}: Props) {
    const careers = ["Ingenieria Mecanica y Electrica", "Ingenieria en Sistemas", "Ingenieria en Informatica", "Ingenieria en Electronica", "Ingenieria en Mecatronica", "Ingenieria en Gestion Empresarial"];
    const semesterText = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto", "Septimo", "Octavo", "Noveno", "Decimo"];
    const initialState: UserCreating = {
        name: "",
        enrollment: "",
        email: "",
        password: "",
        career: "Ingenieria Mecanica y Electrica",
        semester: 1,
        passwordConfirm: "",
        status: "",
        role: "student"
    }
    const [userInfo, setUserInfo] = useState<UserCreating>(initialState)

    // function save user info in firestore
    const saveUserInfo = async (user: UserCreating,uuid:string) => {
        const userRef = doc(db, "users", uuid)
        if (user.role === "student") {
            const dataObj: Student = {
                name: user.name,
                enrollment: user.enrollment,
                email: user.email,
                career: user.career ? user.career : "",
                semester: user.semester ? user.semester : 0,
                role: type,
                status: "active"
            }
            await setDoc(userRef, dataObj)
        } else {
            const dataObj: User = {
                name: user.name,
                enrollment: user.enrollment,
                email: user.email,
                role: type,
                status: "active"
            }
            await setDoc(userRef, dataObj)
        }
    }

// method to handle the input change and save the value in the state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]: value})
    }
    const handleChageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]: value})
    }
// method to handle the submit event and send the data to the firebase
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userInfo.password === userInfo.passwordConfirm) {
            setUserInfo({...userInfo, role: type})
            console.log(userInfo)
            createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
                .then((credential) => {
                    let id = credential.user.uid
                    saveUserInfo(userInfo,id).then(() => {
                        toast.success(id)
                        setVisibility(false)
                        setUserInfo(initialState)
                    })
                })
                .catch(err => {
                    setVisibility(true)
                    if (err.code == "auth/email-already-in-use") {
                        setMessageText("Email already in use")
                    } else if (err.code == "auth/invalid-email") {
                        setMessageText("Invalid email")
                    } else if (err.code == "auth/weak-password") {
                        setMessageText("Password is too weak")
                    } else {
                        setMessageText("An error occurred")
                    }
                })
        } else {
            setVisibility(true)
            setMessageText("passwords does not match")
        }
    }
    return (
        <div className={styles.formsignin}>
            <h3>{type}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" name="name" placeholder="Name" className={"form-control my-2"}
                       onChange={handleChange}/>
                <label htmlFor={type == "student" ? "account" : "rfc"}
                       className="form-label">{type == "student" ? "Numero de cuenta" : "RFC"}</label>
                <input type="text" name="enrollment"
                       placeholder={type == "student" ? "account" : "rfc"} className={"form-control my-2"}
                       onChange={handleChange}/>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" className={"form-control my-2"} placeholder="Email"
                       onChange={handleChange}/>
                {
                    type == "student" ? <>
                            <label htmlFor="semester" className="form-label">Semestre</label>
                            <select name="semester" className={"form-control my-2"} onChange={handleChageSelect}>
                                {
                                    semesterText.map((semester, index) => {
                                        return <option key={index} value={index + 1}>{semester}</option>
                                    })
                                }
                            </select>
                            <label htmlFor="career" className="form-label">Carrera</label>
                            <select name="career" className={"form-control my-2"} onChange={handleChageSelect}>
                                {careers.map((career, index) => {
                                    return <option key={index} value={career}>{career}</option>
                                })}
                            </select>
                        </>
                        : null
                }
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" name="password" className={"form-control my-2"} placeholder="Password"
                       onChange={handleChange}/>
                <label htmlFor="passwordConfirm" className="form-label">Confirma tu contraseña</label>
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