import { ChangeEvent, useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";

interface Props {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

function Login({ setIsLoggedIn }: Props) {
  const { push } = useRouter();
  const initialState = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialState);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginInfo);
    setIsLoggedIn(true);
    push("/UserPage");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  return (
    <main className={"form-signin"}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Email
          <input
            type="email"
            name="email"
            className={"form-control"}
            placeholder={"example@mail.com"}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          Password
          <input
            type="password"
            name="password"
            className={"form-control"}
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2">
          <input type="submit" value="Sing In" className={"btn btn-success"} />
        </div>
      </form>
    </main>
  );
}

export default Login;
