import React, { Component } from 'react';
import { commentActions } from '../actions/commentActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SubmitComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            comment: '',
            likes: 0
        };
    }


    onUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    onSubmitHandler = event => {
        event.preventDefault()
       // console.log("onSubmitHandler hit!")
       console.log('A')
        let formContent = Object.assign({}, this.state)
        this.props.commentActions(formContent);
        console.log('B')
        this.props.history.push("/comments")
      }

    render() {
        return (
            <div>
                <h3> Submit a Comment</h3>
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

                    <label>Email: </label>
                    <input
                        ref="email"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={(event) => this.onUserInput(event)}
                    />

                    <br /><br />
                    <label>Comment: </label>
                    <input
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
  
  export default connect(null, mapDispatchToProps)(SubmitComment);