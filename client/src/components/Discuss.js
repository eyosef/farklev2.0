import React from 'react';
import { NavLink } from 'react-router-dom';
import AllComments from '../containers/AllComments'; 

// const API = 'http://localhost:3001/comments';

// componentDidMount() {
//     fetch(API)
//       .then(response => response.json())
//       .then(comment => this.setState({ comment: comment }));
//   }

const Discuss = () => (

    <div>
        <h3>Discussion Thread</h3>
        <AllComments />
        <NavLink to="/submitcomment" activeClassName="is-active">Submit a Comment</NavLink><br></br>
    </div>
);

export default Discuss;