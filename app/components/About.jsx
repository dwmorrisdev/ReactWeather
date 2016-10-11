var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About React Weather</h1>
      <p>This is an app built with node.js and react.js. Weather information
        is pulled from the Open Weather API by user request and the resulting
        weather is displayed for the user in a message just below the search box.
      </p>
      <p>Built by Dustin Morris 2016.</p>


      <span>
        <h3>Links</h3>
        <ul>
          <li><a href="https://github.com/dwmorrisdev/ReactWeather">ReactWeather on Github</a></li>
          <li><a href="https://openweathermap.org/">OpenWeatherMap.org</a></li>
          <li><a href="https://facebook.github.io/react/">React</a></li>
          <li>Photos by <a href="https://unsplash.com/">Unsplash</a></li>
          <li><a href="http://www.designbysparticus.com">designbysparticus</a></li>
        </ul>
        </span>

    </div>
  )
};

module.exports = About;
