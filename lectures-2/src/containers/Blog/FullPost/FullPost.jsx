import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loadedPost: null,
        }
    }
    getSinglePost = async (postId) => {
        const response = await axios.get(`/posts/${postId}`)
        this.setState({ loadedPost: response.data })
    }
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                this.getSinglePost(this.props.id)
            }
        }
    }
    deletePostHandler = async () => {
       const response = await axios.delete(`/posts/${this.props.id}`)
       console.log(response)
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please Select a Post!</p>;
        if (this.props.id) { post = <p style={{textAlign: 'center'}}>Loading...!</p> }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;