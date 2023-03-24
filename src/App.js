import React from 'react';
import {connect} from 'react-redux';
import {incrementCounter,decrementCounter} from './actions'
function App( {count,incrementCounter,decrementCounter}) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
      <button onClick={()=>console.log(count)}>Count: {count}</button>

    </div>
    
  );
}
function mapStateToProps(state) {
  return {
    count:state.count,
  };
}
//export default App;
export default connect(mapStateToProps,{incrementCounter,decrementCounter})(App);