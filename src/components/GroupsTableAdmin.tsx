import { useState, useEffect } from "react";
import { dbGroups } from "../fsconfig";
import { getDocs } from "firebase/firestore";
import { Assignment } from "../context/interfaces";

function GroupsTableAdminn() {
  const [list, setList] = useState<Assignment[]>([]);
  const deleteGroup = async (id: string) => {
    // await dbGroups.doc(id).delete();
    // setList(list.filter((group) => group.id !== id));
    alert("Delete group "+ id);
  };
  const getAllData = async () => {
    const snapshot = await getDocs(dbGroups);
    const data = snapshot.docs.map((doc) => doc.data());
    let temp: Assignment[] = data.map((group) => ({
      id: group.Clave,
      key: group.Clave,
      room: group.Aula,
      name: group.Nombre,
      semester: group.Semestre,
      credits: group.Creditos,
      group: group.Grupo,
      description: "Some description",
    }));
    setList(temp);
  };
  useEffect(() => {
    getAllData().catch(null);
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">Asignatiras registradas</h1>
      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>Clave</th>
            <th>Nombre</th>
            <th>Grupo</th>
            <th>Semestre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {list.map((group, index) => (
            <tr key={index}>
              <td>{group.key}</td>
              <td>{group.name}</td>
              <td>{group.group}</td>
              <td>{group.semester}</td>
              <td>
                <button className="btn btn-info btn-sm mx-2">Consultar</button>
                <button className="btn btn-danger btn-sm mx-2" onClick={()=>deleteGroup(group.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GroupsTableAdminn;
