import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
                                <p className="header-area__title">Smashed<br />Avocado Time!</p>
                            </Col>
                        </Row>
                        <Row className="equal">
                            <Col xs={8} lg={6}>
                                <span className="header-area__subtitle">Today's NZ median house price has increased by</span>
                            </Col>
                            <Col xs={4} lg={6}>
                                <span className="header-area__price-clock">
                                    $<ItemPriceClock dailyHousePriceIncrease={69} itemCost={5} showHousePriceIncrease={true} /></span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <img
                            className="img-responsive center-block"
                            src={require("../../images/fresh-made-data-211-x-211.png")}
                            alt="Our data is vegan" /></Col>
                </Row>

                <hr className="header-seperator__hr" />
                <div id="menu-area">
                    <Row>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={5}
                                itemName={"tea"}
                                itemNamePlural={"teas"}
                                itemDescription={"triple distilled hibiscus flower, elderberry soaked in boiling spring water"} />
                            <hr className="menu-area__item-seperator" />
                        </Col>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={22}
                                itemName={"smashed avodado toast"}
                                itemNamePlural={"smashed avos"}
                                itemDescription={"avocados lovingly bashed to a soft pulp, juice of lime, cherry tomatos w/ corriander"} />
                            <hr className="menu-area__item-seperator" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={4.5}
                                itemName={"latte"}
                                itemNamePlural={"lattes"}
                                itemDescription={"fresh seventy two brothers beans batch roasted seven times, hand ground"} />
                            <hr className="menu-area__item-seperator" />
                        </Col>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={4.5}
                                itemName={"french toast"}
                                itemNamePlural={"french toasts"}
                                itemDescription={"hand-toasted buckwheat slices soaked in orange sugar-free syruo w/ spices vanilla mascarpone"} />
                            <hr className="menu-area__item-seperator" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={16}
                                itemName={"home made muesli"}
                                itemNamePlural={"muesli bowls"}
                                itemDescription={"w/ sugar-free seasonal fruits, freshly milked goat yoghurt and buckwehat-roasted oats"} />

                        </Col>
                        <Col xs={6}>
                            <MenuItem
                                itemPrice={18.5}
                                itemName={"egg benedict"}
                                itemNamePlural={"eggs benes"}
                                itemDescription={"w/ free range pork sirloin slivers, hollandaise sauce and braised garlic mushrooms on sprouted buckwheat toast"} />

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} >
                            <hr className="header-seperator__hr" />
                        </Col>
                    </Row>
                </div>
                <AvoCalculatorPage />
            </div>
        );
    }
}

export default HomePage;