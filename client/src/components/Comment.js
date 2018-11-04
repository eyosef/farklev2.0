import React, { Component } from 'react';
import { updateComment } from '../actions/commentActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Comment extends Component {

    // refactor into a stateless component

    constructor(props) {
        super(props);
        this.onLikeHandler = this.onLikeHandler.bind(this);
    }

    onLikeHandler = event => {
        // this.props.update(this.props.data.id);
        event.preventDefault();
        let submittedComment = Object.assign({}, this.props.comment)
        this.props.updateComment(submittedComment);
    }

    render() {
        return (
            <React.Fragment>
                 { this.props.comment.email !== 'gamer' ? 
                    <p><strong>{this.props.comment.username} says: </strong> {this.props.comment.comment}  <br></br>{this.props.comment.likes} <button onClick={this.onLikeHandler.bind(this)}>Like</button></p> : false 
                 }
                ___________________________________
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateComment: updateComment
    }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(Comment);