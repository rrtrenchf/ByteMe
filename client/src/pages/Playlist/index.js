import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SongResults from "../../components/SongResults";
import Player from "../Playlist/AppPlayer";
import PlayerApp from "../Playlist/PlayerApi"
import * as $ from "jquery";
import stylePlay from "../Playlist/stylePlay.css"



const AddQueue= (playlist) =>{
      
    let uri = playlist
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",playlist)
  $.ajax({
   
    
      method: 'POST',
    url: "https://api.spotify.com/v1/me/player/queue?uri="+uri+"&device_id=251e200bf0acecb95d19b53c87fb31e415af83ae",
    
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQCNI9t3h5ytSqZgC253IOfkNwLVdig1Ipnrkrg04nI9nF--PrM-oQOIj_N0VOwfU6G4xQUtt-1nL3tRNiM2wkFV4ZDhi_cQDEEkLYVnN9JoHm1oYHqiGkl4Gh4jBSQNPBND7Lu5K3r9cDc-ArEu314fyxwkJGFElX2ovgqGHkswrzSVDHQ1oofV1dZ1fNU07smV00190z5mpmOx2JViM-yGi0RPqZvNnWu2uIzRWh7nN3jw0oI17EB709YakQExWuZpbm4F_JLNYs45coJ6aGWMh6R_uHjIXdIa',
    },
    
    success: data => {
      console.log("DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========DEVICE DATA===========",data)
    }
     
      
    });
    console.log()
    
}
    
 


const Playlist = () => {
  // Setting our component's initial state
  const [playlists, setPlaylists] = useState([])
  const [searchUri, setSearchUri] = useState([])
  // const [formObject, setFormObject] = useState({
  //   songName: "",
  //   artistName: "",
  //   weather: ""
  // })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadPlaylist()

  }, [])

  const loadPlaylist = () => {
    API.getPlaylists()
      .then(res =>
        setPlaylists(res.data),
        


      )
      .catch(err => console.log(err));
  }
  function deletePlaylist(id) {
    API.deletePlaylist(id)
      .then(res => loadPlaylist())
      .catch(err => console.log(err));

  }

  const handleUri = () => {

    {
      playlists.map(playlist => {
        return (
          <>
            {playlist.songUri}
            {console.log("!!!!!!!!!!!!!!!!!!!!!", playlist.songUri)}
          </>
        );


      })
    }

    setSearchUri(playlists[0]?.songUri)
    // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@",searchUri)

  };
  







  return (
    <Container fluid>

      <Row>
        <Col size="md-6 sm-12">
          {playlists.length ? (
            <>
            
            <List>
              {playlists.map(playlist => {
                
                
                return (
                  <>
                 
                  <ListItem key={playlist._id}>
                    <a href={"/playlist/" + playlist._id}>
                      <h1></h1>
                      <strong>
                        {playlist.weather} by {playlist.artistName}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => deletePlaylist(playlist._id)} />
                    <br></br>
                    <span  onClick={() => AddQueue(playlist.songUri)} className="play-btn" role="button" tabIndex="0">Play Next
                      ►
                      
                    </span>
                  </ListItem>
                  </>
                  
                );
               
              })}
            </List>
            </>
            
           
            
          ) : (
              <h3>No Results to Display</h3>
            )}
            
        </Col>
        <Col size="md-6 sm-12">
          <h3>Player</h3>
          <PlayerApp/>


        </Col>
      </Row>
    </Container >

  );
}

export default Playlist;
