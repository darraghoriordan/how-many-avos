import React from 'react';

class ItemPriceClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            housePrice: 0
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
        let dailyIncrease = this.props.dailyHousePriceIncrease;
        let itemCost = this.props.itemCost;
        let secondIncrease = (((dailyIncrease / 24) / 60) / 60);
        let housePriceIncrease = ((now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds()) * secondIncrease;
        let numberOfItemIncrease = 0;
        if (housePriceIncrease >= 0) {
            numberOfItemIncrease = housePriceIncrease / itemCost
        };
        this.setState({housePrice: housePriceIncrease, numberOfItems: numberOfItemIncrease});
    }

    render() {
        return (
            <span>
                {this
                    .state
                    .housePrice
                    .toFixed(3)}</span>
        );
    }
}

export default ItemPriceClock;