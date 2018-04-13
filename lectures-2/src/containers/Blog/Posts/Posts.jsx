import React, { Component } from 'react'
import axios from '../../../axios'
import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
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
    this.props.history.push({pathname: `/posts/${postId}`})
  }

  render () {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
    if (!this.state.errors) {
        posts = this.state.posts.map(post => {
            return (
              // <Link key={post.id} to={`/${post.id}`}>
                <Post 
                  key={post.id}
                  title={post.title} 
                  author={post.author} 
                  clicked={() => this.postSelectedHandler(post.id)}/>
              // </Link>
            )
        })
    }
    return (
      <div>
      <section className="Posts">
        {posts}
      </section>
      <Route path={`${this.props.match.url}/:postID`} exact component={FullPost} />
      </div>
    )
  }
}

export default Posts