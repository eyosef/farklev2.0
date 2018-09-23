import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../actions/commentActions'; // TO DO

class AllComments extends Component {

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {

    return (
      <div className="AllComments">
        {
          <React.Fragment>
            {this.props.comments.all}
          </React.Fragment>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchComments: fetchComments
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllComments);