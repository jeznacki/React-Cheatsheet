import Gist from 'react-gist';

const View_ArrowComponents = () => {

    return <div className='cont'>
        <header>
            <h2>Arrow Function Components</h2>
            <p>
                Defining React function components with arrow functions makes them more concise.
                <br/> This can be done for the App and List component as well, because they only return JSX and don’t
                perform any task in between.
            </p>
        </header>
        <div>

            <Gist id='407d32b1f957ac2572216083afdf2805' />

            <h3>Examples (check the source code)</h3>
            <section>
                <Component1 />
            </section>
            <hr/>
            <section>
                <Component2 />
            </section>
            <hr/>
            <section>

            </section>
            <hr/>

        </div>
    </div>
}

//with function body
const Component1 = () => {

    const title = 'yes!';

    return (
        <div>
            {title}
        </div>
    );

}


//without function body (no return)
const Component2 = () => <div> yo!!! </div>





export default View_ArrowComponents