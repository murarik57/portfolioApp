import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../../actions/post.actions";
import Spinner from "../spinner/Spinner";
import PostItem from "../posts/PostItem";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <PostItem post={post} showActions={false} />
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
});
const mapStateToProps = ({ post }) => ({
  post,
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);
