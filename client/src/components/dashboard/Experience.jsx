import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperienceStart } from "../../actions/profile.actions";

const Experience = ({ experience, deleteExperienceStart }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteExperienceStart(exp._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 class="my-2">Experience Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteExperienceStart: (id) => dispatch(deleteExperienceStart(id)),
});
export default connect(null, mapDispatchToProps)(Experience);
