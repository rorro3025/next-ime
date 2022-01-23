import type { NextPage } from "next";
import Layout from "../components/Layout";
import Head from "next/head";

const Groups: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Consultar Grupos</title>
      </Head>
      <div className="container">
        <h1>Consultar grupos</h1>
        <table className={"table table-dark table-stripped"}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grupo 1</td>
              <td>Descripción del grupo 1</td>
              <td>
                <a href={"/consultar-grupo/1"} className={"btn btn-primary"}>
                  Consultar
                </a>
              </td>
            </tr>
            <tr>
              <td>Grupo 2</td>
              <td>Descripción del grupo 2</td>
              <td>
                <a href={"/consultar-grupo/2"} className={"btn btn-primary"}>
                  Consultar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Groups;
