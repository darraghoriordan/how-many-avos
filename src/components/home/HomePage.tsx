import AvoCalculatorLayout from "../avoCalculator/AvoCalculatorLayout";
import MenuItem from "./MenuItem";
import useCurrentHousePriceChange, { annualPercentageToDailyDollarChange } from "./useCurrentHousePriceChange";

const JULY_2026_NZ_MEDIAN_PRICE = 760_000;
const JULY_2026_ANNUAL_CHANGE_PERCENT = -0.7;
const DAILY_MEDIAN_PRICE_CHANGE = annualPercentageToDailyDollarChange(
  JULY_2026_NZ_MEDIAN_PRICE,
  JULY_2026_ANNUAL_CHANGE_PERCENT,
);

const currency = new Intl.NumberFormat("en-NZ", {
  style: "currency",
  currency: "NZD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const menu = [
  { name: "Tea", plural: "teas", price: 5, description: "Hibiscus and elderberry steeped in volcanic spring water." },
  { name: "Smashed avo", plural: "smashed avos", price: 22, description: "Avocado, lime, cherry tomatoes and coriander on a fresh bagel." },
  { name: "Latte", plural: "lattes", price: 4.5, description: "Single-origin beans, batch roasted and hand ground." },
  { name: "French toast", plural: "French toasts", price: 18, description: "Buckwheat, orange syrup, spice and vanilla mascarpone." },
  { name: "House muesli", plural: "muesli bowls", price: 16, description: "Roasted oats, fig, almonds, yoghurt and seasonal fruit." },
  { name: "Eggs bene", plural: "eggs benes", price: 18.5, description: "Free-range pork, hollandaise and mushrooms on buckwheat toast." },
] as const;

export default function HomePage() {
  const housePriceIncrease = useCurrentHousePriceChange(DAILY_MEDIAN_PRICE_CHANGE);

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div>
          <h1 id="hero-heading">Your brunch is not the housing crisis.</h1>
          <p className="hero__intro">
            A tongue-in-cheek calculator for everyone who has been told a latte stands between them and a home.
          </p>
          <a className="hero__jump" href="#calculator">Ring up your order <span aria-hidden="true">↓</span></a>
        </div>
        <div className="price-ticket" aria-live="off">
          <span>Today the New Zealand median house price has increased by</span>
          <strong>{currency.format(housePriceIncrease)}</strong>
        </div>
      </section>

      <section className="menu-section" aria-labelledby="menu-heading">
        <div className="section-heading">
          <h2 id="menu-heading">Today’s menu</h2>
        </div>
        <div className="menu-grid">
          {menu.map((item) => <MenuItem key={item.name} {...item} housePriceIncrease={housePriceIncrease} />)}
        </div>
      </section>

      <AvoCalculatorLayout />

      <footer className="site-footer">
        <div>
          <p>Designed by <a href="https://www.behance.net/capandshoe6ebf">Billie Charlton</a></p>
          <p>Built by <a href="https://www.darraghoriordan.com">Darragh O’Riordan</a> · © {new Date().getFullYear()}</p>
        </div>
        <p className="site-footer__data-note">
          (Previous 1-year NZ-wide growth as of September 2026. <a href="https://www.reinz.co.nz/Web/Web/News/News-Articles/Market-updates/Prices_remain_steady_as_properties_take_longer_to_sell.aspx">REINZ, July 2026</a>.)
        </p>
      </footer>
    </>
  );
}
