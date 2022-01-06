import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

interface Props {
    role: string;
    setSession : (session: boolean) => void;
}

function navUsers({role,setSession}: Props) {
    return (
        <Navbar bg={"light"} expand={"lg"}>
            <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
            <Navbar.Collapse id={"basic-navbar-nav"}>
                <Nav className="me-auto">
                    <Nav.Link href={"/"}>Mi informacion</Nav.Link>
                    {
                        role === "admin" ?
                            <NavDropdown
                                title={"Administrar"}
                                id={"menu1"}
                                className={"justify-content-end"}
                            >
                                <NavDropdown.Item>Usuarios</NavDropdown.Item>
                                <NavDropdown.Item>Materias</NavDropdown.Item>
                            </NavDropdown>
                            : null
                    }
                    {
                        role == "student" ?
                            <Nav.Link href={"/Grupos"}>Materias</Nav.Link> : null
                    }
                    <button className={"btn btn-danger"} onClick={()=>setSession(false)}>Cerrar session</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default navUsers;
