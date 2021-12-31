import {useApp} from "../context/appContext";

function UserPage() {
    const {user} = useApp();
    return (
        <div className="container">
            <h1>Bienvenido</h1>
            <ul>
                <li>Nombre: {user.name}</li>
                <li>Rol: {user.role}</li>
                <li>Verificado: {false}</li>
            </ul>
        </div>
    );
}

export default UserPage;
