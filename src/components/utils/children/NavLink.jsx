import {
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";

const NavLink = ({ imgSrc, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
        to={to}
        {...props}
    >
      <img src={`./${imgSrc}-${match ? 'white' : 'black'}.svg`} alt="" />
    </Link>
  );
}

export default NavLink;
