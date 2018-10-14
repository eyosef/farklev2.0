import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchComments } from '../actions/commentActions';
import Comment from './Comment';

export class Discuss extends Component {
    constructor(){
        super();

        this.state = { comments: undefined }
    }

    fetchComments = () => this.props.fetchComments(this.state.comments); //change into component lifecycle method

    render() {
        console.log(this.state)
        return (
            <div>
                <h3>Discussion Thread</h3>
                <div>
                     { this.state.comments.map(
                         comment => <Comment comment={ comment } />
                     ) }
                </div>
                <NavLink to="/submitcomment" activeClassName="is-active">Submit a Comment</NavLink><br></br>
            </div>
        )
    }
}



export default connect(state => {return { comments: state.comments } }, { fetchComments })(Discuss);