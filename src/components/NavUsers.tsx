import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  role: string;
  setSession: (session: boolean) => void;
}

function navUsers({ role, setSession }: Props) {
  const { push } = useRouter();
  const handleLogout = () => {
    setSession(false);
    push("/");
  };
  return (
    <Navbar bg={"light"} expand={"lg"}>
      <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
      <Navbar.Collapse id={"basic-navbar-nav"}>
        <Nav className="me-auto">
          <ul className="navbar-nav me-auto justify-content-end">
            <li className={"nav-item"}>
              <Link href={"/"}>
                <a className="nav-link">Mi informacion</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/horarios"}>
                <a className="nav-link">Horarios</a>
              </Link>
            </li>
            {role === "admin" ? (
             <>
            <li className="nav-item">
                <Link href={"/usersManagement"}>
                  <a className="nav-link">Registro de usuarios</a>
                </Link>
              </li> <li className="nav-item">
                <Link href={"/manageGroups"}>
                  <a className="nav-link">Administracion de grupos</a>
                </Link>
              </li></> 
            ) : null}
            {role === "student" ? (
              <li className="nav-item">
                <Link href={"/inscriptAsing"}>
                  <a className="nav-link">Materias</a>
                </Link>
              </li>
            ) : null}
          </ul>
          <button className={"btn btn-danger mx-2"} onClick={handleLogout}>
            Cerrar session
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navUsers;
