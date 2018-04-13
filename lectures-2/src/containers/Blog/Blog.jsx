import React, { Component } from 'react';
import axios from '../../axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            selectedPostId: null,
            errors: false
        }
    }

    fetchAllPosts = async () => {
        try{
            const response = await axios.get('/posts/')
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Josh'
                }
            })
            this.setState({
                posts: updatedPosts
            })
        } catch (error) {
            this.setState({ errors : true })
        }
    }

    postSelectedHandler = (postId) => {
        this.setState({ selectedPostId: postId })
    }

    componentDidMount() {
        this.fetchAllPosts()
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.errors) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}/>
            })
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>

                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                   {posts}
                </section>
            </div>
        );
    }
}

export default Blog;