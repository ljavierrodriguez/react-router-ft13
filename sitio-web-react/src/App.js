import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Services from './views/Services';

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/services/:category">
                    <Services />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;