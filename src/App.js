import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import View_TheReactComponent from './templates/the_react_component/the_react_component.js';


export default function App() {
    return (
        <Router>
            <div className='App'>

                <aside>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/the-react-component">The React Component & JSX</Link>
                        </li>
                        <li>
                            <Link to="/users">Lists in React</Link>
                        </li>
                        <li>
                            <Link to="/users"> Another React Component</Link>
                        </li>
                    </ul>
                </aside>

                <article>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/the-react-component">
                            <View_TheReactComponent />
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


