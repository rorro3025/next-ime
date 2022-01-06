import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
interface Props {
  role: string;
  setSession: (session: boolean) => void;
}

function navUsers({ role, setSession }: Props) {
  return (
    <Navbar bg={"light"} expand={"lg"}>
      <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
      <Navbar.Collapse id={"basic-navbar-nav"}>
        <Nav className="me-auto">
          <Link href={"/"}>
            <Nav.Link>Mi informacion</Nav.Link>
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href={"/usersManagement"}>
                <a href="#" className="nav-link">
                  Crear algo
                </a>
              </Link>
            </li>
          </ul>
          {role === "admin" ? (
            <NavDropdown
              title={"Administrar"}
              id={"menu1"}
              className={"justify-content-end"}
            >
              <Link href={"/usersManagement"}>
                <NavDropdown.Item>Usuarios</NavDropdown.Item>
              </Link>
              <NavDropdown.Item>Materias</NavDropdown.Item>
            </NavDropdown>
          ) : null}
          {role == "student" ? (
            <Nav.Link href={"/Grupos"}>Materias</Nav.Link>
          ) : null}
          <button
            className={"btn btn-danger"}
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
