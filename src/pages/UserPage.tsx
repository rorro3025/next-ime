import { useApp } from "../context/appContext";
import Layout from "../components/Layout";

function UserPage() {
  const { user } = useApp();
  return (
    <Layout>
      <div className="container">
        <div className="container">
          <h1>Bienvenido</h1>
          <ul>
            <li>Nombre: {user.name}</li>
            <li>Rol: {user.role}</li>
            <li>Verificado: {false}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default UserPage;
