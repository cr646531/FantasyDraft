    
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ players, path })=> {
  const selected = (_path)=> {
    const style = {};
    if(_path === path){
      style.fontWeight = 'bold';
    }
    return style
  };

  return (
    <ul>
      <li style={selected('/')}><Link to='/'>Home</Link></li>
      <li style={ selected('/players')}><Link to='/players'>Players</Link></li>
    </ul>
  );
};

const mapStateToProps = ({ players })=> {
  return {
    players
  };
};
export default connect(mapStateToProps)(Nav);