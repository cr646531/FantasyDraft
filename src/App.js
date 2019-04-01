import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPlayers } from './store';
import { Route, HashRouter as Router } from 'react-router-dom';
import Players from './Players';

class App extends Component{

  componentDidMount(){
    this.props.init();
  }

  render(){
    const { players } = this.props;
    console.log(players);
    return (
      <div>
        <Router>
          <div>
            {/* <Route component={ ({ location })=> <Nav path={ location.pathname }/> } /> */}
            <Route exact path='/players' component={ Players } /> 
            {/* <Route path='/users/:id' component={ UserUpdate } />  */}
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    init: ()=> dispatch(loadPlayers()),
  };
};

const mapStateToProps = ({ players })=> {
  return {
    players
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);