import Gist from 'react-gist';

function View_TheReactComponent() {

    return <div className='cont'>
        <header>
            <h2>The React component & JSX</h2>

            First, this React component, called App component, is just a JavaScript function. It’s commonly called
            function component, because there are other variations of React components.

            Second, the App component doesn’t receive any parameters in its function signature
            yet. And third, the App component returns code that resembles HTML which is
            called JSX.
            The function component possess implementation details like any other JavaScript function.
        </header>
        <div>

            <Gist id='06f636ef1212f35453599c08877fe736' />

            <h3>Examples (check the source code)</h3>
            <section>
                <Component1/>
            </section>
             <hr/>
            <section>
                <Component2/>
            </section>
            <hr/>
            <section>
                <Component3/>
            </section>
            <hr/>

        </div>
    </div>
}

function Component1() {

    const title = 'Hi, Mate!';

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}


function Component2() {

    const welcome = {
        greeting: 'Hey',
        title: 'React',
    };

    return (
        <div>
            {welcome.greeting} {welcome.title}
        </div>
    );
}

function getTitle(title) {
    return title;
}

function Component3() {


    return (
        <div>
            {getTitle('React')}
        </div>
    );
}

export default View_TheReactComponent;