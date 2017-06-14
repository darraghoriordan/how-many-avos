import React from 'react';
import ItemPriceClock from './ItemPriceClock';
import {Row, Col} from 'react-bootstrap';
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row className="menu-area__title">
                    <Col xs={12}>{this.props.itemName}
                        <span className="pull-right">{this
                                .props
                                .itemPrice
                                .toFixed(1)}</span>
                    </Col>
                </Row>
                <Row className="menu-area__description">
                    <Col xs={12}>
                        {this.props.itemDescription}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <span className="menu-area__today-price">
                            <ItemPriceClock dailyHousePriceIncrease={69} itemCost={5}/></span>
                        <span className="menu-area__today-price-description">
                            {this.props.itemNamePlural} today!</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default MenuItem