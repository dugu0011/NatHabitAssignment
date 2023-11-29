
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getLocations, getLocationWeatherData } from './api/service'
import { getDayFromDate, getFormattedDate } from './utils/dateUtils'
import Headers from './components/Headers';
import WeatherCard from './components/WeatherCard';


import "./App.css";


function App() {
  const [inputFields, setInputFields] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [locations, setLocations] = useState([]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };


  const handleSectionClick = async (section) => {
    try {
      const response = await getLocationWeatherData(section)
      console.log(response, "response is ")
      const data = response;
      setWeatherData(data);
      setActiveSection(section);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    // Fetch location data from api
    getLocations()
      .then((response) => {
        const data = response;
        setLocations(data);
        const storedInputFields = JSON.parse(localStorage.getItem("inputFields")) || [];
        setInputFields(storedInputFields);
      })
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    localStorage.setItem("inputFields", JSON.stringify(inputFields));
  };

  const handleAddFields = (label) => {
    const newInputFields = [...inputFields, { id: uuidv4(), label }];
    setInputFields(newInputFields);

    closeDropdown(); // Close the dropdown after clicking the "Add More" button
    localStorage.setItem("inputFields", JSON.stringify(newInputFields));
  };

  return (
    <Container className="mt-4">
      <Card>
        <Headers />
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className="d-flex">
                {inputFields.map((inputField) => (
                  <div key={inputField.id}>
                    <div className="gap-2">
                      <Button
                        variant="outline-primary"
                        className={`ms-2 ${activeSection === inputField.label ? "selected" : ""}`}
                        onClick={() => {
                          handleSectionClick(inputField.label);
                          closeDropdown(); // Close the dropdown after clicking a button
                        }}
                      >
                        {inputField.label}
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="dropdown ms-2">
                  <Button
                    onClick={toggleDropdown}
                    className="dropbtn"
                    variant="outline-primary"
                  >
                    Add More{" "}
                    <AddIcon style={{ fontSize: "18px", fontWeight: "bold" }} />
                  </Button>
                  {dropdownVisible && (
                    <div id="myDropdown" className="dropdown-content">
                      {locations.map((location) => (
                        <div
                          key={location.id}
                          onClick={() => {
                            handleAddFields(location.name);
                            handleSectionClick(location.name);
                          }}
                          className="button"
                        >
                          {location.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </form>
          <br></br>
          <div className="buttons-data mt-3">
            {activeSection && (
              <div className="weather-data">
                <Row>
                  <h5 className="text-center mb-4 heading_five">
                    4 day Weather Forecast - {activeSection}
                  </h5>

                  {weatherData.forecast?.forecastday?.map((day, index) => (
                    <WeatherCard key={index} day={day} index={index} />
                  ))}
                </Row>

              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;

