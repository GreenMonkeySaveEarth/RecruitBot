import React from 'react';
import { TicTacToe } from './tic-tac-toe/TicTacToe';
import { ConnectFour } from './connect-4/ConnectFour';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/tictactoe' component={TicTacToe} />
                    <Route path='/connect4' component={ConnectFour} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;