import React, { useState } from "react";
import { addComment } from "../../actions/post.actions";
import { connect } from "react-redux";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (postId, formData) => dispatch(addComment(postId, formData)),
});
export default connect(null, mapDispatchToProps)(CommentForm);
