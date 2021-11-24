import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import { getProfileStart } from "../../actions/profile.actions";
import ProfileItem from "./ProfileItem";

const Profiles = ({ profile: { profiles, loading }, getProfileStart }) => {
  useEffect(() => {
    getProfileStart();
  }, [getProfileStart]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found ...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getProfileStart: () => dispatch(getProfileStart()),
});

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
