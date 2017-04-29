import React from 'react';

class HousePriceClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            housePrice: 0,
            numberOfLattes: 0
        };

        this.componentWillUnmount = this
            .componentWillUnmount
            .bind(this);
        this.componentWillMount = this
            .componentWillMount
            .bind(this);
    }

    componentWillMount() {
        this.tick();
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        let now = (new Date());
        let dailyIncrease = 69;
        let latteCost = 5;
        let secondIncrease = (((dailyIncrease / 24) / 60) / 60);
        let housePriceIncrease = ((now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds()) * secondIncrease;
        let numberOfLattesIncrease = 0;
        if (housePriceIncrease >= 0) {
            numberOfLattesIncrease = housePriceIncrease / latteCost
        };
        this.setState({housePrice: housePriceIncrease, numberOfLattes: numberOfLattesIncrease});
    }

    render() {
        return (
            <p>
                The median house price in New Zealand has increased by {this
                    .state
                    .numberOfLattes
                    .toFixed(4)}
                lattes (${this
                    .state
                    .housePrice
                    .toFixed(4)}) just TODAY! Awesome!
            </p>
        );
    }
}

export default HousePriceClock;