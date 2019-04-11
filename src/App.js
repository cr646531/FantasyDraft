// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getPlayers } from './store';
// import { Route, HashRouter as Router } from 'react-router-dom';

// import Nav from './Nav';
// import Players from './Players';

// class App extends Component{

//   componentDidMount(){
//     // this.props.getPlayers();
//   }

//   render(){
//     const { players } = this.props;
    
//     return (
//       <div>
//         <Router>
//           <div>
//             <Route component={ ({ location })=> <Nav path={ location.pathname }/> } />
//             <Route exact path='/players' component={ Players } /> 
//             {/* <Route path='/users/:id' component={ UserUpdate } />  */}
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch)=> {
//   return {
//     getPlayers: ()=> dispatch(getPlayers())
//   };
// };

// const mapStateToProps = ({ players })=> {
//   return {
//     players
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayers, loadPlayers } from './store';
import { Route, HashRouter as Router } from 'react-router-dom';

import Nav from './Nav';
import Players from './Players';
import Player from './Player';

class App extends Component{

  componentDidMount(){
    this.props.getPlayers();
  }

  render(){
    const { players } = this.props;
    
    return (
      <div>
        <Router>
          <div>
            <Route component={ ({ location })=> <Nav path={ location.pathname }/> } />
            <Route exact path='/players' component={ Players } /> 
            <Route path='/players/:name' render={ ({ match })=> <Player name={match.params.name} /> }  />
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    getPlayers: ()=> dispatch(getPlayers()),
    loadPlayers: ()=> dispatch(loadPlayers())
  };
};

export default connect(null, mapDispatchToProps)(App);