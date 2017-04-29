import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class HomePage extends React.Component {
    render() {
        return (

            <Jumbotron>
                <h1>Hello,  millennial!</h1>
                <p>This site will help you on your journey to the Kiwi dream of home ownership. It's going to take 
                    some effort from you so get ready to have your last latte!
                </p>
            </Jumbotron>
        );
    }
}

export default HomePage;