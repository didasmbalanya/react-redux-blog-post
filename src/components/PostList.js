import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  async componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPosts = () =>
    this.props.posts.map((post) => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          {" "}
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader id={post.userId} />
        </div>
      </div>
    ));
  render() {
    return <div className="ui relaxed divided list">{this.renderPosts()}</div>;
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
