var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div >
      <h1 className="text-center page-title">Examples</h1>
      <div className="container">
      <p>Here are a few locations to try out.</p>
      <ol>
        <li>
          <Link to='/?location=Savannah'>Savannah, TN</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris, France</Link>
        </li>
        <li>
          <Link to='/?location=New%20York'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Hollywood'>Hollywood, CA</Link>
        </li>
      </ol>
    </div>
    </div>
  )
};

module.exports = Examples;
