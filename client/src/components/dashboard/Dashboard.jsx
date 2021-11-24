import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfileStart } from "../../actions/profile.actions";
import Spinner from "../spinner/Spinner";
import DashboardLinks from "./DashboardLinks";
import Experience from "./Experience";
import Education from "./Education";
import { deleteAccountStart } from "../../actions/profile.actions";

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfileStart,
  deleteAccountStart,
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
          <DashboardLinks />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button
              onClick={() => deleteAccountStart()}
              className="btn btn-danger"
            >
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
  deleteAccountStart: () => dispatch(deleteAccountStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
