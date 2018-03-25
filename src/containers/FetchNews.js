import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import { bindActionCreators } from 'redux';

class FetchNews extends Component {
  constructor(props) {
        super(props);
      }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" onClick={(e) => {e.preventDefault();this.props.dispatch(fetchNews())}}>Get News</button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(fetchNews, dispatch) }
}
export default connect(mapDispatchToProps)(FetchNews);
