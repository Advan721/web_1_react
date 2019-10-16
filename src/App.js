import React from 'react';
import Header from "./components/layout/header";
import Contacts from "./components/Contacts"
import About from "./components/About"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TodoApp from './TodoApp';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <Header />
                        </div>
                    </div>
                    <Router>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contacts">
                                <Contacts />
                            </Route>
                            <Route path="/">
                                <TodoApp />
                            </Route>
                        </Switch>
                    </Router >
                </div>
            </div>
        )
    };
}

export default App;