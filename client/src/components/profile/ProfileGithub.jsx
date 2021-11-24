import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile.actions";
import Spinner from "../spinner/Spinner";

const ProfileGithub = ({ getGithubRepos, username, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars: {repo.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watchers: {repo.watchers_count}
                </li>
                <li className="badge badge-light">Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getGithubRepos: (username) => dispatch(getGithubRepos(username)),
});
const mapStateToProps = ({ profile: { repos } }) => ({
  repos,
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileGithub);
