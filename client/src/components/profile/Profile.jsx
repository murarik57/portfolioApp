import React, { Fragment, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileByIdStart } from "../../actions/profile.actions";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileGithub from "./ProfileGithub";
import ProfileEducation from "./ProfileEducation";

const Profile = ({
  match,
  getProfileByIdStart,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileByIdStart(match.params.id);
  }, [getProfileByIdStart, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Education credentials</h4>
              )}
            </div>
            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ profile, auth }) => ({
  profile,
  auth,
});
const mapDispatchToProps = (dispatch) => ({
  getProfileByIdStart: (userId) => dispatch(getProfileByIdStart(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
