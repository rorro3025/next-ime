import {useApp} from "../context/appContext";

function UserPage() {
    const {user} = useApp();
    return (
        <div className="container bg-light">
            <h1 className={"text-center"}>Bienvenido</h1>
            <ul>
                <li><strong>Nombre:</strong> {user.name}</li>
                <li><strong>Matricula:</strong> {user.matricule}</li>
                <li><strong>Rol:</strong> {user.role}</li>
                <li><strong>Correo:</strong> {user.email}</li>
                <li><strong>Verificado:</strong> {user.status}</li>
            </ul>
        </div>
    );
}

export default UserPage;
