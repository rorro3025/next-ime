import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from "../components/Layout"
import Select from "../components/SelectExists"
import {useApp} from "../context/appContext"
import Welcome from "../components/UserPage"

const Home: NextPage = () => {
    const {isLoggedIn} = useApp()
    return (
        <Layout>
            <Head>
                <title>Inicio</title>
            </Head>
            {isLoggedIn ? <Welcome /> : <Select/>}
        </Layout>
    )
}

export default Home
