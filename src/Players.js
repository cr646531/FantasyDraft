import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Players = ({ players })=> {

    console.log(players)
  return (
      
    <div>
      <h1>Players</h1>
      
      <ul>
        {
          players.map( player => {
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


const mapStateToProps = ({ players })=> {
  return {
    players
  };
};

export default connect(mapStateToProps)(Players);