import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchComments } from '../actions/commentActions';
import GameComment from './GameComment';

export class DiscussGame extends Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const comments = this.props.comment.map((comment, i) => 
                <GameComment key={i} comment={comment}/>
        );

        return (
            <div>
                <h3>Let's Talk Code</h3>
                    <NavLink to="/submitgamecomment" activeClassName="is-active">Submit a Comment</NavLink>
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

export default connect( mapStateToProps, { fetchComments })(DiscussGame);