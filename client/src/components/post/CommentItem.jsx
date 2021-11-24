import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/post.actions";
import Moment from "react-moment";

const CommentItem = ({
  deleteComment,
  postId,
  auth,
  comment: { _id, text, name, avatar, user, date },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>
        {!auth.loading && auth.user._id === user && (
          <button
            onClick={(e) => deleteComment(postId, _id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i> Delete the comment
          </button>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => ({
  auth,
});
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (postId, commentId) =>
    dispatch(deleteComment(postId, commentId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
