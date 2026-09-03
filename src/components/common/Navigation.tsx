import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="How Many Avos home">
        <img src="/images/avocalc-logo-56-x-45.png" alt="" width="56" height="45" />
        <span>How many avos?</span>
      </NavLink>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Calculator</NavLink>
        <NavLink to="/about">The story</NavLink>
      </nav>
    </header>
  );
}
