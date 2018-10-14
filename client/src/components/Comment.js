import React, { Component } from 'react';

export class Comment extends Component {

    render() {
        return (
            <div>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}

export default Comment;