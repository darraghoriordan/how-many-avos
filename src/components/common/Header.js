import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
                   <NavLink to="/" activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to="/courses">courses list</NavLink>
                {" | "}
                <NavLink to="/about">about</NavLink>
                {" | "}
                <NavLink to="/howmanyavos">How many avos</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
