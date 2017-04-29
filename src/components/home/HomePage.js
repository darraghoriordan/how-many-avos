import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import HousePriceClock from './HousePriceClock';

class HomePage extends React.Component {
    render() {
        return (

            <Jumbotron>
                <h1>Hello!</h1>
                <p>This site will help you on your journey to the ultimate Kiwi dream of home ownership.
                    It's going to take some effort from you so get ready to have your last latte!
                </p>
                <HousePriceClock/>
            </Jumbotron>
        );
    }

    calculate
}

export default HomePage;