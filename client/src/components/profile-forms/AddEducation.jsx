import React, { Fragment, useState } from "react";
import { addEducationStart } from "../../actions/profile.actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const AddEducation = ({ addEducationStart, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducationStart(formData, history);
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that
        you have attended{" "}
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            value={school}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={fieldofstudy}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            value={from}
            onChange={(e) => handleChange(e)}
            type="date"
            name="from"
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              value={current}
              checked={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
              name="current"
            />{" "}
            Currently here
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => handleChange(e)}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Degree Description"
            value={description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Dashboard
        </Link>
      </form>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addEducationStart: (formData, history) =>
    dispatch(addEducationStart(formData, history)),
});
export default connect(null, mapDispatchToProps)(withRouter(AddEducation));
