import React, { Component } from 'react';
import { commentActions } from '../actions/commentActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SubmitGameComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: 'gamer',
            comment: ''
        };
    }


    onUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    onSubmitHandler = event => {
        event.preventDefault()
        console.log("onSubmitHandler hit!")
        let formContent = Object.assign({}, this.state)
        this.props.commentActions(formContent);
        this.props.history.push("/discuss-game")
      }

    render() {
        return (
            <div>
                <h3> How Could the Functionality/Code Imrpove?</h3>
                <h4>Submit a Comment</h4>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <label>Username: </label>
                    <input 
                        ref="username"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={(event) => this.onUserInput(event)}
                    />

                    <br /><br />
                    <label>Comment: </label>
                    <textarea
                        ref="comment"
                        type="text"
                        id="comment"
                        name="comment"
                        placeholder="comment"
                        value={this.state.comment}
                        onChange={(event) => this.onUserInput(event)}
                    />

                    <br /><br />
                    <button type="submit">Submit Comment</button>
                </form>
                <br />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        commentActions: commentActions
    }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(SubmitGameComment);