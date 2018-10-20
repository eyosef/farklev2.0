import React, { Component } from 'react';

// const Comment = () => (
//     <div>
//         <p>{this.props.comment}</p>
//     </div>
// )

export default class Comment extends Component {
    render() {
        return (
            <React.Fragment>
                 { this.props.comment.email !== 'gamer' ? 
                    <p><strong>{this.props.comment.username} says: </strong> {this.props.comment.comment} </p> : false 
                 }
                ___________________________________
            </React.Fragment>
        )
    }
}
