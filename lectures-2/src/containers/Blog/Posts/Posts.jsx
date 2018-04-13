import React, { Component } from 'react'

import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = {
        posts: [],
    }
  }

  componentDidMount() {
    this.fetchAllPosts()
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
        console.log(error)
    }
}



  postSelectedHandler = (postId) => {
    this.setState({ selectedPostId: postId })
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
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts