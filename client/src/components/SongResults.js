import React from "react";


function SongResults(props) {

  const results = props.song
  const songName = props.song?.tracks?.items[0].name
  console.log("This is", props)

  let resultsArray = []


  if (results?.length !== 0) {
    resultsArray = results?.tracks?.items
  }
  console.log("SongResultsArray",resultsArray)

  return (
    <div>
      <table className="table table-striped">

        <thead>
          <tr>
            <th scope="col-3">Image</th>
            <th scope="col">Song Title</th> 
             <th scope="col-3">Artist</th>
            <th scope="col-3">Add Song</th>
          
            
           
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
                <td>
                  {tracks.artists[0].name}
                </td>
                <td> <button type="button" class="btn btn-secondary" onClick={props.handleAddSong} >Add Song</button>
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
