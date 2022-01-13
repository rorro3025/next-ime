import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

interface Props {
    role: string;
    setSession: (session: boolean) => void;
}

function navUsers({role, setSession}: Props) {
    return (
        <Navbar bg={"light"} expand={"lg"}>
            <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
            <Navbar.Collapse id={"basic-navbar-nav"}>
                <Nav className="me-auto">
                    <ul className="navbar-nav me-auto justify-content-end">
                        <li className={"nav-item"}>
                            <Link href={"/"}>
                                <a className="nav-link">Mi informacion</a>
                            </Link>
                        </li>
                        <NavDropdown
                            title={"Administrar"}
                            id={"menu1"}
                            className={"justify-content-end"}
                        >
                            <NavDropdown.Item>Materias</NavDropdown.Item>
                        </NavDropdown>

                        {role === "admin" ? (
                            <li className="nav-item">
                                <Link href={"/usersManagement"}>
                                    <a className="nav-link">
                                        Crear algo
                                    </a>
                                </Link>
                            </li>
                        ) : null}
                        {role == "student" ? (
                            <Nav.Link href={"/Grupos"}>Materias</Nav.Link>
                        ) : null}
                    </ul>
                    <button
                        className={"btn btn-danger mx-2"}
                        onClick={() => setSession(false)}
                    >
                        Cerrar session
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navUsers;
