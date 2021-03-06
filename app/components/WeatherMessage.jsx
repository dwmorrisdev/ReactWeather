var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center message">It is {temp} degrees in {location}.</h3>
  );
};

module.exports = WeatherMessage;
