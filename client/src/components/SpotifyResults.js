import React,{useState} from "react";



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

function SpotifyResults(props) {
  console.log("What is props", props)

  // const findArtist = props.SpotifyResults?.filter(artist => console.log(props.spotifyResults.artists?.items[0].name));
const results = props.spotifyResults
let resultsArray=[]
console.log("RESULTS HERE ",results.length)
if (results.length!==0) {
 resultsArray=results.artists.items
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
                  {artist.images.length===0 ? "" : <img src={artist.images[0].url} />}
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



export default SpotifyResults ;