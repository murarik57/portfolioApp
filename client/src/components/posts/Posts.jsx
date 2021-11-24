import React, { Fragment, useEffect } from "react";
import { getPostsStart } from "../../actions/post.actions";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = ({ getPostsStart, post: { posts, loading } }) => {
  useEffect(() => {
    getPostsStart();
  }, [getPostsStart]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community!
      </p>
      <PostForm />

      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ post }) => ({
  post,
});
const mapDispatchToProps = (dispatch) => ({
  getPostsStart: () => dispatch(getPostsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
