import React from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {useApp} from "../context/appContext"

interface Props {
    children: React.ReactNode;
}

function Layout({children}: Props) {
    const {user} = useApp()
    return (
        <div>
            <div className="container-fluid text-white" style={{backgroundColor: "#003366"}}>
                <Link href={"/"}>
                    <a>
                        <Image src="/img/logounam.png" alt="logo" width={"424"} height={"130"}/>
                    </a>
                </Link>
            </div>
            <Navbar bg={"light"} expand={"lg"}>
                <Nav>
                    <NavDropdown title={"Registrarme"} id={"menu1"} className={"justify-content-end"}>
                        <NavDropdown.Item>Profesor</NavDropdown.Item>
                        <NavDropdown.Item>Alumno</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <div style={{minHeight: "700px"}}>
                {children}
            </div>
            <div className="container-fluid bg-dark text-center text-white">
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export default Layout;