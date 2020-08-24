import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SongResults from "../../components/SongResults";

function Playlist() {
  // Setting our component's initial state
  const [playlist, setPlaylist] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadPlaylist()
  }, [])

  const loadPlaylist = () => {
    console.log("Added to db")

    API.getPlaylists(playlist)
      .then(res =>
        setPlaylist(res.data)
      )
      .catch(err => console.log(err));
  }
  function deletePlaylist(id) {
    API.deletePlaylist(id)
      .then(res => loadPlaylist())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
      <Col size="md-6 sm-12">
        {playlist.length ? (
          <List>
            {playlist.map(playlist => {
              return (
                <ListItem key={playlist._id}>
                  <a href={"/playlist/" + playlist._id}>
              <h1>{playlist.weather}</h1>
                    <strong>
                      {playlist.songName} by {playlist.artistName}
                    </strong>
                  </a>
                  <DeleteBtn onClick={() => deletePlaylist(playlist._id)} />
                </ListItem>
              );
            })}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Col>
        </Row>
      </Container >
      
    );
}


export default Playlist;
