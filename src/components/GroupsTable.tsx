import {db} from "../fsconfig";

function ListGroups (){
   return(
      <div>
         <h1>List Groups</h1>
         <table>
            <thead>
               <tr>
                  <th>Group Name</th>
                  <th>Group Description</th>
                  <th>Group Members</th>
               </tr>
            </thead>
            <tbody>
               {db.groups.map(group => (
                  <tr key={group.id}>
                     <td>{group.name}</td>
                     <td>{group.description}</td>
                     <td>{group.members.join(', ')}</td>
                  </tr>
               ))}
            </tbody>
         </table>
   )
}