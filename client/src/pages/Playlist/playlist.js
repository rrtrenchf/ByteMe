import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Playlist() {
  // Setting our component's initial state
  const [playlist, setPlaylist] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadPlaylist()
  }, [])

  // Loads all books and sets them to books
  function loadPlaylist() {
    API.getPlaylist()
      .then(res => 
        setPlaylist(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.artist && formObject.songName)}
                onClick={() => {}}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
            {playlist.length ? (
              <List>
                {playlist.map(playlist => {
                  return (
                    <ListItem key={playlist._id}>
                      <a href={"/playlist/" + playlist._id}>
                        <strong>
                          {playlist.songName} by {playlist.artist}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Playlist;
