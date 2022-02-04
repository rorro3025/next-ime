import type { NextPage } from "next";
import Layout from "../components/Layout";
import { useApp } from "../context/appContext";
import TableList from "../components/GroupsTable";

const AsignatureIns: NextPage = () => {
  const { user } = useApp();
  console.log(user);
  return (
    <Layout>
      <div className="container mt-3">
        <h1 className={"text-center"}>Incripion de asingnaturas</h1>
      </div>
      <div className="container">
        {user.role === "student" ? (
          <TableList semester={user.semester?user.semester:"0"} />
        ) : (
          <h1 className="text-danger text-center mt-3">Acceso denegado</h1>
        )}
      </div>
    </Layout>
  );
};

export default AsignatureIns;
