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
        // itemCost dailyHousePriceIncrease
        let now = (new Date());
        let housePriceIncreasePerDay = this.props.dailyHousePriceIncrease;
        let itemCost = this.props.itemCost;

        let housePriceIncreasePerSecond = (((housePriceIncreasePerDay / 24) / 60) / 60);
        let housePriceIncreaseToNow = ((now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds()) * housePriceIncreasePerSecond;

        let numberOfItemIncreaseToNow = 0;
        if (housePriceIncreaseToNow >= 0) {
            numberOfItemIncreaseToNow = housePriceIncreaseToNow / itemCost
        };
        this.setState({housePrice: housePriceIncreaseToNow, numberOfItemIncreaseToNow: numberOfItemIncreaseToNow});
    }

    render() {

        if (this.props.showHousePriceIncrease) {
            return <span>
                {this
                    .state
                    .housePrice
                    .toFixed(3)}
            </span>;
        } else {
            return <span>
                {this
                    .state
                    .numberOfItemIncreaseToNow
                    .toFixed(4)}
            </span>;
        }

    }
}

export default ItemPriceClock;