import React from 'react';
import {Link, IndexLink} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>How many avos?</p>
                      <IndexLink to="/">Home</IndexLink>
                {" | "}
                <Link to="/courses">courses module</Link>
                {" | "}
                <Link to="/about">learn more</Link>
                  {" | "}
                <Link to="/howmanyavos">How many avos</Link>
            </div>
        );
    }
}

export default HomePage;