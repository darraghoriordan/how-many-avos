import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>How many avos?</p>
                <Link to="/">Home</Link>
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