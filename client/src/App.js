import React, {Component, useState} from 'react';
import CardList from './CardList';
import Card from './Card';
import SearchBox from './SearchBox';
import { users } from './users';
import FileUpload from './FileUpload';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {


  const [state, setState] = useState({
    users: []
  });

  // constructor() {
  //   super()
  //   this.state = {
  //     users: [],
  //     search_field: ''
  //   }
  // }

  const Upload = () => {

    return <div className = 'container mt-4'>
       <FileUpload />
       </div>
}

  const MainDisplay = () => {
  return <div className = "tc">
          <div className = "main-display">
            <h1 className = "f-subheadline lh-title"> Men's Shed App </h1>                                                                                          
            {/*<SearchBox searchChange = {this.onSearchChange} /> */}
            <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href =  "#" onClick = {handleClick}>Add Story</a>
            <Link to = "/upload"> Upload a Story </Link>
            </div>
  </div> 
}

  // componentDidMount() {
    //might need this later
  // }

  const onSearchChange = (event) => {
    this.setState({search_field: event.target.value})
  }


   const handleClick = () => {
    // setState({
    //   users: [ 
    //   state.users,
    //           <Card
    //           key = {0} 
    //           id = {users[0].id} 
    //           name  = {users[0].name}
    //           date = {users[0].date}
    //           title = {users[0].title}
    //           description = {users[0].description}
    //           />]
    // })
  }

    
    // const filteredUsers = this.state.users.filter( users => {
    //   return this.users.name.toLowerCase().includes(this.state.search_field.toLowerCase());
    // }) 

    return (
      <Router>
        <h1> Welcome to the Men's Shed App </h1>
        <ul>
          <li> 
          <Link to = "/disp"> View Stories </Link>
          </li>
          <li>
          <Link to = "/upload"> Upload </Link>
          </li>
        </ul>

        <Switch>

          <Route path="/disp">
            <MainDisplay />  
          </Route>

          <Route path="/upload">
            <Upload />  
          </Route>

        </Switch>
          {/* <CardList users = {filteredUsers} /> */}
      </Router>
    );

}







export default App;
