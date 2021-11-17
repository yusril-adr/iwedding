import NavLink from "./children/NavLink";
import "../../styles/utils/BottomNav.css";

const BottomNav = () => (
  <ul
    className="bottom-nav flex justify-between bg-yellow"
  >
    <li><NavLink to="/catalogue" imgSrc="catalogue" /></li>
    <li><NavLink to="/" imgSrc="home" /></li>
    <li><NavLink to="/about" imgSrc="cs" /></li>
  </ul>
);

export default BottomNav;
