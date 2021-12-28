import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function navStudent() {
  return (
    <Navbar bg={"light"} expand={"lg"}>
      <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
      <Navbar.Collapse id={"basic-navbar-nav"}>
        <Nav className="me-auto">
          <Nav.Link href={"/UserPage"}>Mi informacion</Nav.Link>
          <Nav.Link href={"/Grupos"}>Materias</Nav.Link>
          <NavDropdown
            title={"Registrarme"}
            id={"menu1"}
            className={"justify-content-end"}
          >
            <NavDropdown.Item>Profesor</NavDropdown.Item>
            <NavDropdown.Item>Alumno</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navStudent;
