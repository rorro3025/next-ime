import { dbGroups } from "../fsconfig";
import { onSnapshot, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Assignment } from "../context/interfaces";

interface Props {
  semester: number;
}

function ListGroups({ semester }: Props) {
  const [groups, setGroups] = useState<Assignment[]>([]);
  const getAllData = async () => {
    const querySnapshot = await getDocs(dbGroups);
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log(data);
  };
  const getGroupsBySemester = async () => {
    const q = query(dbGroups, where("Semestre", "==", ""));
    const data = onSnapshot(q, (snapshot) => {
      const list: any = [];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(list, semester);
    });
  };
  useEffect(() => {}, []);

  return (
    <div className="container">
      <h1>List Groups</h1>
      <button className={"btn btn-info mx-5"} onClick={getAllData}>
        Get data
      </button>
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
