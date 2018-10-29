import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyC6kQfDUgezPogZiUjfiqkALHJa1EX-JoM';
const App = () => {
    return (
        <div>

            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'))