import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import View_TheReactComponent from './templates/the_react_component/the_react_component.js';
import View_ListsInReact from './templates/lists_in_react/lists_in_react.js';
import View_ArrowComponents from './templates/arrow_components/arrow_components.js';
import View_ReactState from './templates/react_state/react_state.js';


export default function App() {
    return (
        <Router>
            <div className='App'>

                <aside>

                    <h3>Basics</h3>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/the-react-component">The React Component & JSX</Link>
                        </li>
                        <li>
                            <Link to="/lists-inreact">Lists in React</Link>
                        </li>
                        <li>
                            <Link to="/arrow-components">Arrow Function Components</Link>
                        </li>
                        <li>
                            <Link to="/react-state">React State</Link>
                        </li>
                    </ul>

                    <h3>Intermediate</h3>

                    <h3>Advanced</h3>
                </aside>

                <article>
                    <Switch>
                        <Route path="/lists-inreact">
                            <View_ListsInReact />
                        </Route>
                        <Route path="/the-react-component">
                            <View_TheReactComponent />
                        </Route>
                        <Route path="/arrow-components">
                            <View_ArrowComponents />
                        </Route>
                        <Route path="/react-state">
                            <View_ReactState />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </article>

            </div>
        </Router>
    );
}

function Home() {
    return <div className='cont'>

        <header>
            <h2>Home</h2>
            Example header text
        </header>
        <div>

            <section>
                gsfgs
            </section>
            <hr/>
            <section>
                fgsdfgs
            </section>
            <hr/>

        </div>
    </div>;
}

function About() {
    return <h2>About</h2>;
}


