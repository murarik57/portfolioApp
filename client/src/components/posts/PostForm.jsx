import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/post.actions";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
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
  addPost: (formData) => dispatch(addPost(formData)),
});
export default connect(null, mapDispatchToProps)(PostForm);
