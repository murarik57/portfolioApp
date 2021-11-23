import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfileStart } from "../../actions/profile.actions";
import Spinner from "../spinner/Spinner";

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfileStart,
}) => {
  useEffect(() => {
    getCurrentProfileStart();
  }, [getCurrentProfileStart]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <div className="dash-buttons">
            <Link to="/edit-profile" className="btn btn-light">
              <i className="fas fa-user-circle text-primary"></i> Edit Profile
            </Link>
            <Link to="/add-experience" className="btn btn-light">
              <i className="fab fa-black-tie text-primary"></i> Add Experience
            </Link>
            <Link to="/add-education" className="btn btn-light">
              <i className="fas fa-graduation-cap text-primary"></i> Add
              Education
            </Link>
          </div>

          <h2 className="my-2">Experience Credentials</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th className="hide-sm">Title</th>
                <th className="hide-sm">Years</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tech Guy Web Solutions</td>
                <td className="hide-sm">Senior Developer</td>
                <td className="hide-sm">02-03-2009 - 01-02-2014</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="my-2">Education Credentials</h2>
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Northern Essex</td>
                <td className="hide-sm">Associates</td>
                <td className="hide-sm">02-03-2007 - 01-02-2009</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="my-2">
            <button className="btn btn-danger">
              <i className="fas fa-user-minus"></i>
              Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You didn't setup a profile yet, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ auth, profile }) => ({
  auth,
  profile,
});
const mapDispatchToProps = (dispatch) => ({
  getCurrentProfileStart: () => dispatch(getCurrentProfileStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
