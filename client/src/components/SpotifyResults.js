import React from "react";

function SpotifyResults(props) {

  // const findArtist = props.SpotifyResults?.filter(artist => console.log(props.spotifyResults.artists?.items[0].name));
  const results = props.spotifyResults

  let resultsArray = []

  if (results.length !== 0) {
    resultsArray = results.artists.items
  }

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
          {resultsArray.map(artist => {

            return (
              <tr>
                <td>
                  {artist.images.length === 0 ? "" : <img src={artist.images[2].url} />}
                </td>
                <td>
                  {(artist.name)}
                </td>
                <td>
                  {console.log("TABLE DATA")}
                </td>
              </tr>

            )
          })}

        </tbody>
      </table>
    </div>
  );
}



export default SpotifyResults;