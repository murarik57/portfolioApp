import React from "react";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, to, from, description },
}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment from="DD/MM/YYYY">{from}</Moment> -{" "}
        {!to ? "Now" : <Moment from="DD/MM/YYYY">{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileExperience;
