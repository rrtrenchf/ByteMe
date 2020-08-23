import React, { useEffect, useState } from "react";
// import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn"
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ZipInput from "../../components/ZipInput";

function Weather() {
  // Setting our component's initial state
  const [weather, setWeather] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all weather
  useEffect(() => {
    loadWeather()
  }, [])

  const loadWeather = (weather) => {

    API.getWeather(weather)
      .then(res =>
        setWeather(res.data))
      .catch(err => console.log(err));
  }
 console.log("WEATHER DB",loadWeather)

  return (
    <Container fluid>
      <Row>
      <Col size="md-6 sm-12">
        {weather.length ? (
          <List>
            {weather.map(forecast => {
              return (
                <ListItem key={forecast._id}>
                  <a href={"/weather/" + forecast._id}>
                    <strong>
                      {forecast.weather}
                    </strong>
                  </a>
                  <DeleteBtn onClick={() => { }} />
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