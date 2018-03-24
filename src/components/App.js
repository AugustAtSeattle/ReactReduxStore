import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import ResetCounter from  '../containers/ResetCounter'

const App = () => {
  return (
    <div className="container">
        <div> Hello Ubuntu </div>
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>

        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
      </div> <br />
      <div className="columns">
        <div className="column is-11">
          <ResetCounter></ResetCounter>
        </div>
      </div>  
      </div>
  )
}
export default App;
