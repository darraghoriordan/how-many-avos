import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <h1>Home</h1>
                <p>sdf sdf sd</p>
                <Link to="/about">learn more</Link>
            </div>
        );
    }
}

export default HomePage;