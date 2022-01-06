import {useApp} from "../context/appContext";

function UserPage() {
    const {user} = useApp();
    return (
        <div className="container bg-light">
            <h1 className={"text-center"}>Bienvenido</h1>
            <ul>
                <li>Nombre: {user.name}</li>
                <li>Matricula: {user.matricule}</li>
                <li>Rol: {user.role}</li>
                <li>Correo:{user.email}</li>
                <li>Verificado: {false}</li>
            </ul>
        </div>
    );
}

export default UserPage;
