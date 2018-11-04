import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchComments } from '../actions/commentActions';
import Comment from './Comment';

export class Discuss extends Component {

    constructor(props) {
        super(props);
        this.state = { comments: this.props.comment }
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.value !== this.props.value) {
    //         this.props.fetchComments();
    //     }
    // }

    componentDidMount() {
        this.props.fetchComments();
        // add logic to only run fetchComments on page reload
    }


    render() {
        const comments = this.props.comment.map((comment, i) =>  <Comment key={i} comment={comment}/>)
        return (
            <div>
                <h3>Discussion Thread</h3>
                    <NavLink to="/submitcomment" activeClassName="is-active">Submit a Comment</NavLink>
                    <br></br>
                    <br></br>
                <div>
                { comments }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return (
        { comment: state.comment }
    )
}

export default connect( mapStateToProps, { fetchComments })(Discuss);