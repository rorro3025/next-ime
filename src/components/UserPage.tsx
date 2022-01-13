import { useApp } from "../context/appContext";
import Image from "next/image";
import { Student, User } from "../context/interfaces";

function UserPage() {
  const { user } = useApp();

  return (
    <div className="container bg-light">
      <h1 className={"text-center"}>Bienvenido</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Image
              src={"/img/userGen.webp"}
              alt={"profile"}
              width={200}
              height={200}
            />
          </div>
          <div className="col">
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>
                <strong>Nombre:</strong> {user.name}
              </li>
              <li className={"list-group-item"}>
                <strong>Matricula:</strong> {user.matricule}
              </li>
              <li className={"list-group-item"}>
                <strong>Rol:</strong> {user.role}
              </li>
              <li className={"list-group-item"}>
                <strong>Correo:</strong> {user.email}
              </li>
              <li className={"list-group-item"}>
                <strong>Verificado:</strong> {user.status}
              </li>
              {user.role === "student" && (
                <>
                 <li className={"list-group-item"}>
                    <strong>Carrera:</strong> {user.career}
                  </li>
                  <li className={"list-group-item"}>
                    <strong>Semestre:</strong> {user.semester}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
