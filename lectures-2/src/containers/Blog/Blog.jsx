import React, { Component } from 'react';

import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})



class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: 'new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                                }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    {/* <Route path="/new-post" component={NewPost} />  */}
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;