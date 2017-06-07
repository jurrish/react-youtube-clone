//go find the library called react from our dependencies in our node_modules, and assign it to the variable React. the transpiler will run that file and make sure that index.js has access to those innards.
//we still reactDom to render components to the DOM
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
//api key alows us to make requests to youtube
//TODO remember to put api key in/ load in from .env


//in react, we want DOWNWARDS FLOW. that means, that the most parent component should do the fetching of data, so that our other components (search_bar, video_list, etc) have access to thta fetched data
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

//1)TODO create a new component. this component should produce some html. aka we are using javacsript functions to return jsx. jsx can't be interpreted by the browser. babel transpiles it for us from the boilerplate. what's the purpose of jsx then? Becuase, that's what produces the html on the DOM. it gets turn into html which then gets placed to the document/DOM.

const App = () => {
  //jsx is a dialect of javascript which allows what looks like html to be babeled or transpiled by react.
  return (
    <div>
    <SearchBar />
    </div>
  );
}


//2)TODO take this component's generated html and put it on the page (use javascript to put it in the DOM) - we have to tell it WHERE (the second argument) on the DOM's node to insert (it must already exist)
ReactDom.render(<App />, document.querySelector('.container'));

// (<App />) is different from (App). <App /> is an INSTANCE. App is just a class
