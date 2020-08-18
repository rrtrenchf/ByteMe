import React from "react";

function SpotifyResults(props) {
  console.log("What is props", props.search)
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col-3">Artist</th>
            <th scope="col-3">Song Title</th>

          </tr>
        </thead>
        <tbody>
          {/* filter out search text against results list, loop through list to pull last name we are looking for*/}
          {findEmp?.map(function (item, i) {
            return (
              <tr key={i}>
                <td>
                  <img src={item.picture.medium} />
                </td>
                <td>
                  {item.name.first}
                </td>
                <td>
                  {item.name.last}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default SpotifyResults;