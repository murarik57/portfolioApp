import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post.actions";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>
        <button
          onClick={() => addLike(_id)}
          type="button"
          class="btn btn-light"
        >
          <i class="fas fa-thumbs-up"></i>{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={() => removeLike(_id)}
          type="button"
          class="btn btn-light"
        >
          <i class="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} class="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span class="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button
            type="button"
            onClick={() => deletePost(_id)}
            class="btn btn-danger"
          >
            <i class="fas fa-times"></i>
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
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
