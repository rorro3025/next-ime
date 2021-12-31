import {ChangeEvent, useState, FormEvent} from "react";
import styles from "./Login.module.css";
import {auth} from "../fsconfig"
import {signInWithEmailAndPassword} from "firebase/auth";

// props: definition of the props that are passed to this component
interface Props {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setMessage: (message: string) => void;
    setVisibility: (visibility: boolean) => void;
}

function Login({setIsLoggedIn, setMessage, setVisibility}: Props) {
    // initialize the state of the data that is going to be used in the form
    const initialState = {
        email: "",
        password: "",
    };
    const [loginInfo, setLoginInfo] = useState(initialState);

    // handle the change of the input fields
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password).then(() => {
            console.log(loginInfo);
            setIsLoggedIn(true);
        }).catch(err => {
            setVisibility(true)
            if (err.code == "auth/user-not-found") {
                setMessage("User not found");
            } else if (err.code == "auth/wrong-password") {
                setMessage("Wrong password");
            } else {
                setMessage("Something went wrong");
            }
        })
    };

    // method to set values of the input fields
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let {name, value} = event.target;
        setLoginInfo({...loginInfo, [name]: value});
    };
    return (
        <main className={styles.formsignin}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    Email
                    <input
                        type="email"
                        name="email"
                        className={"form-control my-2"}
                        placeholder={"example@mail.com"}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    Password
                    <input
                        type="password"
                        name="password"
                        className={"form-control my-2"}
                        placeholder="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="d-grid gap-2">
                    <input type="submit" value="Sing In" className={"btn btn-success"}/>
                </div>
            </form>
        </main>
    );
}

export default Login;
