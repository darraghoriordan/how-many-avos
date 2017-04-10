import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <h1>Home</h1>
                <p>How many avos?</p>
                <Link to="/calc">use the calc</Link>
{" | "}
                <Link to="/about">learn more</Link>
            </div>
        );
    }
}

export default HomePage;