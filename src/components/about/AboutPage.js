import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="header-area__title">About</h1>
                <p>I was getting a bit frustrated with some of the commentary in the news papers
                    about simply giving up lattes to buy houses in some heated real estate markets
                    like Auckland, New Zealand.
                </p>
                <p>
                    I created this page to show there's a bit more to the housing problem and saving
                    for a deposit than giving up one latte a day can fix.</p>

                <p>This is a parody site and shouldn't be taken seriously, the stats are all
                    calculated in a basic way, by a shitty programmer and with crazy, wild
                    assumptions.</p>
                <p>I assume no interest growth in your savings. I don't include any inflation.</p>
                <p>I assume 7% mortgage rates. An avo breakfast costs $22, a latte is $4.50</p>
                <p>Billie Charlton did the Ux and design (which I haven't fully implemented yet!)</p>
                <p>Get in touch with me over at&nbsp;
                    <a href="https://www.darraghoriordan.com">https://www.darraghoriordan.com</a>
                    &nbsp;if you need to contact me. Links to all the social media sites are on there too.
                </p>
            </div>
        );
    }
}

export default AboutPage;