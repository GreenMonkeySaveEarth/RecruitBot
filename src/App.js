import React from 'react';
import { TicTacToeContainer } from './tic-tac-toe/container/TicTacToeContainer';
import { ConnectFour } from './connect-4/ConnectFour';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/tictactoe' component={TicTacToeContainer} />
                    <Route path='/connect4' component={ConnectFour} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;