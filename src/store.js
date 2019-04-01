import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD_PLAYERS = 'LOAD_PLAYERS';

const playerReducer = (state = [], action) => {
    switch(action.type){
        case LOAD_PLAYERS:
            state = action.players;
            break;
    }
    return state;
};

const reducer = combineReducers({
   players: playerReducer 
});

export default createStore(reducer, applyMiddleware(thunk));

const _loadPlayers = (players)=> ({
    type: LOAD_PLAYERS,
    players
});

const loadPlayers = ()=> {
    return (dispatch)=> {
        return axios.get('/data')
            .then(response => response.data)
            .then(players => dispatch(_loadPlayers(players)));
    }
};

export { loadPlayers };
