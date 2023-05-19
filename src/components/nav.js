import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable */
export const Navbar = ({ url }) => (
  <div className="nav-wrap">
  <div className="cms-wrapper">
        <p>Bookstore CMS</p>
        <ul>
          <li><Link className="links" to="/">{url ? <span>Books</span> : <span className="selected">Books</span> }</Link></li>
          <li><Link className="links" to="/categories">{url ? <span className="selected">Categories</span> : <span>Categories</span>}</Link></li>
        </ul>
      </div>

      <img src="https://img.icons8.com/material/24/0290ff/gender-neutral-user--v1.png" alt="profile" className="profilepic" />
    </div>
  );

  Navbar.propTypes = {
    url: PropTypes.bool,
  };
  Navbar.defaultProps = {
    url: Boolean,
  };

export default Navbar;