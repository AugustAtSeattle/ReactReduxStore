import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>
          {this.props.news}
          </h1>
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
  return {
    news: state.newsReducer,
  };
}
export default connect(mapStateToProps)(News);
