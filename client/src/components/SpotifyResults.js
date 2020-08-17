// import React from "react";

// function SpotifyResults(props) {
//   console.log("What is props", props.search)
//   const findEmp = props.results.filter(employee => employee.name.last.toLowerCase().includes(props.search.toLowerCase()))
//   return (
//     <div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col"> Picture </th>
//             <th scope="col-3">First Name</th>
//             <th scope="col-3">Last Name
//               <i className="fas fa-sort" onClick={props.sortList} id="sortIcon"></i></th>
//             <th scope="col-3">Email</th>
//             <th scope="col">Phone</th>

//           </tr>
//         </thead>
//         <tbody>
//           {/* filter out search text against results list, loop through list to pull last name we are looking for*/}
//           {findEmp?.map(function (item, i) {
//             return (
//               <tr key={i}>
//                 <td>
//                   <img src={item.picture.medium} />
//                 </td>
//                 <td>
//                   {item.name.first}
//                 </td>
//                 <td>
//                   {item.name.last}
//                 </td>
//                 <td>
//                   {item.email}
//                 </td>
//                 <td>
//                   {item.phone}
//                 </td>
//                 <td>
//                   {item.registered.age}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// export default SpotifyResults;