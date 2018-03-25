import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import ResetCounter from  '../containers/ResetCounter'
import News from '../containers/News'
import FetchNews from '../containers/FetchNews'

const App = () => {
  return (
    <div className="container">
        <div> Hello React & Redux </div>
      <Counter></Counter>
      <br />
      
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>

        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
      </div> 
      <br />
      
      <div className="columns">
        <div className="column is-11">
          <ResetCounter></ResetCounter>
        </div>
      </div>
      <br />
      
      <News></News>
      <br />

      <div className="columns">
        <div className="column is-11">
          <FetchNews></FetchNews>
        </div>
      </div>
      <br />
      </div>
  )
}
export default App;
