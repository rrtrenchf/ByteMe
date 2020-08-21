import React, { useState } from "react";



// function SpotifyResults(props) {
//   console.log({ props })
//   const findArtist = props.SpotifyResults?.filter(artist => props.spotifyResults.artists?.items[0].name);
//   console.log(props.SpotifyResults.artists?.items[0])


//   {findArtist.length ? (
//     {findArtist.map(artist => {
//       return (
//         <table className="table table-striped">
//           <tr>
//             <th scope="col">Picture</th>
//             <th scope="col-3">Artist</th>
//             <th scope="col-3">Song Title</th>




//           </tr>

//           <tr key={artist.items[0].id}>

//             <td>{this.props.artist?.items[0].picture.medium}</td>
//             <td>{console.log("SOMETHING WAS HERE")}</td>


//           </tr>
//           </table>
//       );

//     })};
//   )}

//       }   

function SongResults(props) {
  
    const results = props.song

    let resultsArray = []
  
   
    if (results.length !== 0) {
      resultsArray = results.tracks.items
      
  
    }
  console.log("BÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆBÆ", resultsArray)
  
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
        <td>
          
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


// {songsArray?.map(track => {

//     return (
//       <tr>
//         <td>
//           {/* {artist.images.length === 0 ? "" : <img src={artist.images[2].url} />} */}
//         </td>
//         <td>
//           {(track?.name)}
//         </td>
//         <td>
//           {console.log("!!!!!!!!!!!!!!!!!!!!!" + songsArray.length)}
//         </td>
//       </tr>

//     )
//   })}