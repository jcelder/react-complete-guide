import React, { Component } from 'react';

class Course extends Component {
    
    render () {
        const query = new URLSearchParams(this.props.location.search)
        const title = query.get('title')

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseID}</p>
            </div>
        );
    }
}

export default Course;