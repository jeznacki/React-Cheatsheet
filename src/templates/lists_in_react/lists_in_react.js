import Gist from 'react-gist';

function View_ListsInReact() {

    return <div className='cont'>
        <header>
            <h2>Lists in React</h2>
            <p>
                You can use the built-in JavaScript map method for arrays to iterate over each item of the list and
                return a new version of each:
            </p>
        </header>
        <div>

            <Gist id='f2efb2665cebca927b141f9ff34e0433' />

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

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function Component1() {
    return (
        <div>
            {list.map(function(item) {
                return (
                    <div key={item.objectID}>
                        {item.title}
                    </div>
                );
            })}
        </div>
    );
}

//By assigning a key attribute to each list item’s element, React can
//identify modified items if the list changes (e.g. re-ordering).

function Component2() {
    return (
        <div>
            {list.map(function(item) {
                return (
                    <div key={item.objectID}>
                        <span>
                        <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </div>
                );
            })}
        </div>
    );
}


export default View_ListsInReact;