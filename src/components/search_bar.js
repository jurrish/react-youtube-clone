//when a user types in an input, we make a request to youtube api
//always import react if you're using jsx so our file can access React's scope.
import React, { Component } from 'react';

//index needs a reference to this SearchBar instance since everything is SILOED

//functional component is a 'dumb component' that we can call and returns jsx. it has no concept of state.
// const SearchBar = () => {
//   return <input /> //React.createElement
// }

//CLASS BASED component is a component that is aware of itself, state, and can send that information out (it has properties and methods)

//define a new class called searchbar and give it all the functionality from React.Component class. - every class must have a render method.
class SearchBar extends Component {
  //initialize state in a class-based component
  //all javascript classes have a function called constructor. it's called automatically when a new class instance is called.
  //it does setup in our class.  initializes state, etc.
  //super allows us to call a parent method
  //currying?
  constructor(props) {
    super(props);
    //create a new object and assign it to this.state
    //the object we pass will record properties to the state itself. ie - search TERM.
    //setting this.state to an empty object allows it to be accessed by this.setState everywhere else.
    this.state = { term: '' || 'this is the initialized starting state that can be changed through .setState and passed to the event.target.value!'};
  }
  //same as React.Component, or const Component = React.Component
  //syntax for defining a method on a class
  render() {
    //all html elements have a change event listener
    //create a reference to our custom event handler
    return (

      <div className="search-bar">
      <input
      //value starts at '' because that is what state is initialized as!
      //value is a CONTROLLED COMPONENT. it just CAPTURES the sate as a value. it still needs to be passed that value from SOMEWHERE
        value = { this.state.term }
        onChange={event => {


        //to change state, use this.setState
        //if we don't have this, we can't pass that state to the value! it's(the value tag) a CONTROLLED COMPONENT. this.setState is what tells the input to be rerendered with the new state.
        this.onInputChange(event.target.value)}} />
      </div>
        //whenever we change the value of the input, we set the state (this.setState) with the new value of the input, and it re-renders to this.state.term!
        // Value of the input: {this.state.term}

        //a controlled field (it's a form element, like an input or something) whose value is set by the state.
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  //define event handler onChange, or handleChange is common practice. add the event argument
}

export default SearchBar;
