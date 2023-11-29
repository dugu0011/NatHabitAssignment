// WeatherCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { getDayFromDate, getFormattedDate } from '../utils/dateUtils';

const WeatherCard = ({ day, index }) => (
  <Col key={index} md={3}>
    <Card>
      <Card.Body className="text-center">
        <h5 className="heading_five">{getDayFromDate(day.date)}</h5>
        {getFormattedDate(day.date) === getFormattedDate(new Date()) ? (
          <p className="mb-2 text-muted">Today</p>
        ) : (
          <p className="mb-2 text-muted"><br></br></p>
        )}
        <p className="mb-2 text-muted">{getFormattedDate(day.date)}</p>
        <h5 className="heading_five">{day.day.maxtemp_c} °C</h5>
        <p className="mb-2 text-muted">{day.day.condition.text}</p>
      </Card.Body>
    </Card>
  </Col>
);

export default WeatherCard;
