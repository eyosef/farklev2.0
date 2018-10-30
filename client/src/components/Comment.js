import React, { Component } from 'react';

// const Comment = () => (
//     <div>
//         <p>{this.props.comment}</p>
//     </div>
// )

export default class Comment extends Component {

    // refactor into a stateless component

    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        };

        this.linkHandler = this.linkHandler.bind(this);
    }

    setState = (state) => {
        event.preventDefault();
       console.log("linkHandler hit!")
       state.likes +=1;
       console.log(`{state.likes}`);

       // persist like data to Rails

       // study setState()
       // study state implementation, differences between state and props
    }



    render() {
        return (
            <React.Fragment>
                 { this.props.comment.email !== 'gamer' ? 
                    <p><strong>{this.props.comment.username} says: </strong> {this.props.comment.comment}  <br></br>{this.state.likes} <button onClick={this.setState()}>Like</button></p> : false 
                 }
                ___________________________________
            </React.Fragment>
        )
    }
}
