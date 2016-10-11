var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3>About React Weather</h3>
      <p>This is an app built with node.js and react.js. Weather information
        is pulled from the Open Weather API by user request and the resulting
        weather is displayed for the user in a message just below the search box.
      </p>
      <p>Built by Dustin Morris 2016.</p>
      <span><a href="http://www.designbysparticus.com">designbysparticus</a></span>

    </div>
  )
};

module.exports = About;
