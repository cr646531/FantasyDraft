import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_PLAYERS = 'GET_PLAYERS';
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

export default createStore(reducer, applyMiddleware(thunk, loggerMiddleware));


const _loadPlayers = (players)=> ({
    type: LOAD_PLAYERS,
    players
})

const getPlayers = ()=> {
    return ()=> {
        return axios.get('/data')
            .then(response => response.data)
            .then(players => console.log(players));
    }
};

const loadPlayers = ()=> {
    return (dispatch)=> {
        return axios.get('/players')
            .then(response => response.data)
            .then(players => dispatch(_loadPlayers(players)))
    };
};

export { getPlayers, loadPlayers };


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import loggerMiddleware from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';

// const LOAD_PLAYERS = 'LOAD_PLAYERS';

// const playerReducer = (state = [], action) => {
//     switch(action.type){
//         case LOAD_PLAYERS:
//             state = action.players;
//             break;
//     }
//     return state;
// };

// const reducer = combineReducers({
//    players: playerReducer 
// });

// export default createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

// const _loadPlayers = (players)=> ({
//     type: LOAD_PLAYERS,
//     players
// });

// const loadPlayers = ()=> {
//     return (dispatch)=> {
//         return axios.get('/data')
//             .then(response => response.data)
//             .then(players => dispatch(_loadPlayers(players)));
//     }
// };

// export { loadPlayers };

