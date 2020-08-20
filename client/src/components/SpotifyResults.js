import React from "react";



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

  const findArtist = props.SpotifyResults?.filter(artist => console.log(props.spotifyResults.artists?.items[0].name));



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
          {findArtist?.map(artist => {
            return (
              <div>
                <td>
                  <img src={this.props.SpotifyResults.artist?.items[0].picture.medium} />
                </td>
                <td>
                  {this.console.log(props.spotifyResults.artists?.items[0].name)}
                </td>
                <td>
                  {console.log("TABLE DATA")}
                </td>
              </div>

            )
          })}
        </tbody>
      </table>
    </div>
  );
}



export default SpotifyResults ;