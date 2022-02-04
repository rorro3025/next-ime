import { dbGroups } from "../fsconfig";
import { query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Assignment } from "../context/interfaces";

interface Props {
  semester: string;
}

function ListGroups({ semester }: Props) {
  const [groups, setGroups] = useState<Assignment[]>([]);
  const getAllData = async () => {
    const querySnapshot = await getDocs(dbGroups);
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log(data);
  };
  const getGroupsBySemester = async () => {
    const q = query(dbGroups, where("Semestre", "==", semester));
    const snapshot = await getDocs(q);
    let temp: any = [];
    snapshot.forEach((doc) => {
      temp.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    let data: Assignment[] = temp.map((group: any) => ({
      id: group.id,
      key: group.Clave,
      room: group.Aula,
      name: group.Nombre,
      semester: group.Semestre,
      credits: group.Creditos,
      group: group.Grupo,
      description: "Some description",
    }));
    console.log(temp);
    setGroups(data);
  };
  useEffect(() => {
    getGroupsBySemester().catch(null);
  }, []);

  return (
    <div className="container">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Group Description</th>
            <th>Group Credits</th>
            <th>Room</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.description}</td>
              <td>{group.credits}</td>
              <td>{group.room}</td>
              <td>{group.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListGroups;
