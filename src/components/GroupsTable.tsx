import { dbGroups } from "../fsconfig";
import { onSnapshot, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Assignment } from "../context/interfaces";

interface Props {
  semester: number;
}

function ListGroups({ semester }: Props) {
  const [groups, setGroups] = useState<Assignment[]>([]);
  useEffect(() => {
    const q = query(dbGroups, where("Semestre", "==", semester.toString()));
    const data = onSnapshot(q, (snapshot) => {
      const list: any = [];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(list,semester);
    });
  }, []);
  return (
    <div className="container">
      <h1>List Groups</h1>
      <table>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Group Description</th>
            <th>Group Credits</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>{group.description}</td>
              <td>{group.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListGroups;
