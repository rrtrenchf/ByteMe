import React from "react";


function SongResults(props) {

  const results = props.song

  let resultsArray = []


  if (results.length !== 0) {
    resultsArray = results.tracks.items
  }

  return (
    <div>
      <table className="table table-striped">

        <thead>
          <tr>
            <th scope="col-3">Image</th>
            <th scope="col">Song Title</th>
            <th scope="col-3">Artist</th>
          </tr>
        </thead>
        <tbody>
          {resultsArray?.map(tracks => {
            return (
              <tr>
                <td>
                  {tracks.album.images.length === 0 ? "" : <img src={tracks.album.images[2].url} />}
                </td>
                <td>
                  {(tracks.name)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}



export default SongResults;
