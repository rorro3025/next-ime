import React from "react"
import Link from "next/link"
import Image from "next/image"
import {useApp} from "../context/appContext"
import style from "./Login.module.css"
import NavUsers from "./NavUsers"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode;
}

function Layout({children}: Props) {
    // get User for adaption of navbar
    const {isLoggedIn,user,setIsLoggedIn} = useApp()
    return (
        <div>
            <div className="container-fluid text-white" style={{backgroundColor: "#003366"}}>
                <Link href={"/"}>
                    <a>
                        <Image src="/img/logounam.png" alt="logo" width={"424"} height={"130"}/>
                    </a>
                </Link>
            </div>
            <ToastContainer/>
            {isLoggedIn?
                <NavUsers role={user.role} setSession={setIsLoggedIn}/>:null
            }
            <div style={{minHeight: "700px"}}>
                {children}
            </div>
            <div className={style.footerTop}>
                <div className="container-fluid">
                    <h3>Social</h3>
                    <Image src="/img/icons_2.png" alt="social" width={"189"} height={"69"}/>
                </div>
            </div>
            <div className={style.copyright}>
                <div className="container">
                    <p>© 2019 UNAM. Todos los derechos reservados | Facultad de Estudios Superiores Cuautitlán.</p>
                </div>
            </div>
        </div>
    )
}

export default Layout;