import React from 'react';
import ReactDOM from 'react-dom';
import './style/_index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

var mockCards = [
    {id:1,userName:'Ben Stephens',type:'visa',cardNumber:4568236598453021,expDate:"03/23/23",cv:271},
    {id:2,userName:'Sara Maxwell',type:'mastercard',cardNumber:4568006598453021,expDate:"03/23/23",cv:271},
    {id:3,userName:'Jorge Thomphson',type:'discover',cardNumber:4568236598477021,expDate:"03/23/23",cv:271},
    {id:4,userName:'John Irving',type:'visa',cardNumber:4568236598499021,expDate:"03/23/23",cv:271},
]
localStorage.setItem('cards',JSON.stringify(mockCards))
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App /></Provider>
    </BrowserRouter>, document.getElementById('root'));
