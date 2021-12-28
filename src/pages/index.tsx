import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from "../components/Layout"
import Login from "../components/Login"
import {useApp} from "../context/appContext"

const Home: NextPage = () => {
    const {isLoggedIn, setIsLoggedIn} = useApp()
    return (
        <Layout>
            <Head>
                <title>Inicio</title>
            </Head>
            {isLoggedIn ? <h1>Bienvenido</h1> : <Login setIsLoggedIn={setIsLoggedIn}/>}
        </Layout>
    )
}

export default Home
