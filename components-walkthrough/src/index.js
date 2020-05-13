import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

const App = () => {
    return (
        <div className="ui container comments">
            <Comment owner='jesse' time="7:00 AM" text="this is my comment!" />
            <Comment />
            <Comment />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))