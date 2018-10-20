import React, { Component } from 'react';

export default class GameComment extends Component {
    render() {
        return (
            <React.Fragment>
                { this.props.comment.email === 'gamer' ? <p><strong>{this.props.comment.username} says: </strong> {this.props.comment.comment} </p> : false }
                ___________________________________
            </React.Fragment>
        )
    }
}
