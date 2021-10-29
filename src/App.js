import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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
                            <Link to="/about">The React Component</Link>
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
                        <Route path="/users">
                            <Users />
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
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
