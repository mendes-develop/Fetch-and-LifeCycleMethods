import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


// REACT-REDUX
import { Provider }  from 'react-redux'
import { createStore } from 'redux'
// import reducer from our files
import reducer from './reducer.js'
// creating our store

const store = createStore(
    reducer
)

ReactDOM.render(
    
    <Provider store= { store }>

        <App />

    </Provider>
       
    
    , document.getElementById('root'));


