import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth.action";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        {!loading && isAuthenticated ? (
          <Fragment>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a href="#!" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i>{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
