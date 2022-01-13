import { ChangeEvent, useState, FormEvent } from "react";
import styles from "./Login.module.css";
import { auth } from "../fsconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { User } from "../context/interfaces";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../fsconfig";
import { BiUserCircle } from "react-icons/Bi";
import {CgPassword} from "react-icons/cg";

// props: definition of the props that are passed to this component
interface Props {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setMessage: (message: string) => void;
  setVisibility: (visibility: boolean) => void;
  setUser: (user: User) => void;
}

function Login({ setIsLoggedIn, setMessage, setVisibility, setUser }: Props) {
  // initialize the state of the data that is going to be used in the form
  const initialState = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialState);

  // funtion to get user data from firesore
  const getUserData = async (id: string) => {
    let docRef = doc(db, "users", id);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      setUser({
        name: data.name,
        matricule: data.matricule,
        email: data.email,
        role: data.role,
        status: data.status,
      });
    }
  };
  
  // handle the change of the input fields
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
      .then((credential) => {
        let { uid } = credential.user;
        getUserData(uid);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setVisibility(true);
        if (err.code == "auth/user-not-found") {
          setMessage("User not found");
        } else if (err.code == "auth/wrong-password") {
          setMessage("Wrong password");
        } else {
          setMessage("Something went wrong");
        }
      });
  };

  // method to set values of the input fields
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  return (
      <div className={"container"}>
        <h1 className={"text-center text-secondary my-3"}>
          Inicio de sesión
        </h1>
        <main className={styles.formsignin}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h4><BiUserCircle /> Email</h4>
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
              <h4><CgPassword /> Password</h4>
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
              <input type="submit" value="Sing In" className={"btn btn-success"} />
            </div>
          </form>
          <p className={"text-info text-center mt-2"}>Olvide mi contraseña</p>
        </main>
      </div>
  );
}

export default Login;
