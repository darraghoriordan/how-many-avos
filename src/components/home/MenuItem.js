import React from 'react';
import ItemPriceClock from './ItemPriceClock';
import {Row, Col} from 'react-bootstrap';
class MenuItem extends React.Component {

    render() {
        return (
            <div className="menu-item">
                <Row className="menu-item__title">
                    <Col xs={12}>{this.props.itemName}
                        <span className="pull-right">{this
                                .props
                                .itemPrice
                                .toFixed(1)}</span>
                    </Col>
                </Row>
                <Row className="menu-item__description">
                    <Col xs={12}>
                        {this.props.itemDescription}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <span className="menu-item__today-price">
                            <ItemPriceClock dailyHousePriceIncrease={69} itemCost={this.props.itemPrice}/></span>
                        <span className="menu-item__today-price-description">
                            {this.props.itemNamePlural} today!</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default MenuItem