import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPlayers } from './store';

class Players extends Component {

  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    this.props.loadPlayers();
  }

  render(){
    return (
        
      <div>
        <h1>Players</h1>
        
        <ul>
          {
            this.props.players.map( player => {
              return (
                <li key={ player.id }>
                  <Link to={`/players/${player.id}`}>
                    { player.info_player }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch)=> {
  return {
    loadPlayers: ()=> dispatch(loadPlayers())
  };
};

const mapStateToProps = ({ players })=> {
  return {
    players
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);