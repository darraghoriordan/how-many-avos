import React from 'react';
import {Row, Col} from 'react-bootstrap';
import HousePriceClock from './HousePriceClock';
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
                                    <HousePriceClock
                                        dailyHousePriceIncrease={69}
                                        latteCost={5}
                                        itemNamePlural="lattes"/></span>
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
                            <Row className="menu-area__title">
                                <Col xs={12}>Tea
                                    <span className="pull-right">5.0</span>
                                </Col>
                            </Row>
                            <Row className="menu-area__description">
                                <Col xs={12}>
                                    triple distilled hibiscus flower, elderberry soaked in boiling spring water
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <span className="menu-area__today-price">
                                         <HousePriceClock
                                        dailyHousePriceIncrease={69}
                                        latteCost={5}
                                        itemNamePlural="lattes"/></span>
                                    <span className="menu-area__today-price-description">
                                        teas today!</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={6}>Smashed Avocado Toast
                                </Col>
                                <Col xs={6}>22
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    avocado lovingly bashed to a pulp, juice of lime, cherry tomatos w/ corriander
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    11.298 smashed avos today!
                                </Col>

                            </Row>
                        </Col>

                    </Row>
                </div>
                <AvoCalculatorPage/>
            </div>
        );
    }
}

export default HomePage;