import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ItemPriceClock from './ItemPriceClock';
import MenuItem from './MenuItem';
import AvoCalculatorPage from '../avoCalculator/AvoCalculatorPage';

class HomePage extends React.Component {
    render() {
        return (
            <div id="header-area">
                <Row>
                    <Col xs={6}>
                        <Row>
                            <Col xs={12}>
                                <p className="header-area__title">Smashed<br/>Avocado Time!</p>
                            </Col>
                        </Row>
                        <Row className="equal">
                            <Col xs={8} lg={6}>
                                <span className="header-area__subtitle">Today's NZ median house price has increased by</span>
                            </Col>
                            <Col xs={4} lg={6}>
                                <span className="header-area__price-clock">
                                    <ItemPriceClock dailyHousePriceIncrease={69} itemCost={5}/></span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <img
                            className="img-responsive center-block"
                            src={require("../../images/fresh-made-data-211-x-211.png")}
                            alt="Our data is vegan"/></Col>
                </Row>

                <hr/>
                <div id="menu-area">
                    <Row>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={5}
                                itemName={"tea"}
                                itemNamePlural={"teas"}
                                itemDescription={"triple distilled hibiscus flower, elderberry soaked in boiling spring water"}/>

                        </Col>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={5}
                                itemName={"tea"}
                                itemNamePlural={"teas"}
                                itemDescription={"triple distilled hibiscus flower, elderberry soaked in boiling spring water"}/>
                        </Col>
                    </Row>
                </div>
                <AvoCalculatorPage/>
            </div>
        );
    }
}

export default HomePage;