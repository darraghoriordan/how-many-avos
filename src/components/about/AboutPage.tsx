import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <article className="about-page">
      <header>
        <h1>A small calculator about a very big problem.</h1>
        <p className="about-page__lead">Built in 2018, refreshed for today, and still firmly on the side of brunch.</p>
      </header>
      <div className="about-page__body">
        <p>I made this after getting frustrated with commentary suggesting people could save a New Zealand house deposit by giving up lattes and Netflix.</p>
        <p>The calculator makes the gap visible: when property prices climb faster than incomes, skipping small pleasures is not a housing policy.</p>
        <blockquote>People should be able to enjoy a coffee and have a place of their own to live.</blockquote>
        <p>This is parody, not financial advice. The calculator uses deliberately simple assumptions: no growth on savings, no inflation, a 4% mortgage rate and a 30-year term.</p>
        <p>I was eventually fortunate enough to buy property, but salary growth during the tech boom—not giving up coffee—made the difference.</p>
        <p>Questions or corrections? Find me at <a href="https://www.darraghoriordan.com">darraghoriordan.com</a>.</p>
        <Link className="text-link" to="/">Try the calculator <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
