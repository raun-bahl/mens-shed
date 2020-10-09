import React, {Component, useState} from 'react';
import CardList from './CardList';
import Card from './Card';
import SearchBox from './SearchBox';
import { users } from './users';
import FileUpload from './FileUpload';
import './index.css';
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
  return         <div className = "flex justify-between">
          <div className = "tc">
            <div className = "main-display">
              <h1 className = "f-subheadline lh-title"> Men's Shed App </h1>      
            </div>
          </div>
          <div className = "main-button">
            <Link to = "/choose">
            <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Add a Story</a>
            </Link>
          </div>
        </div>
}

  const Choose = () => {
  return <div className = "tc">
          <div className = "main-display">
            <h1 className = "f-subheadline lh-title"> What would you like to add? </h1> 
            <div className="flex flex-column width">
              <Link to  = "/announcement-upload">
                <a class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">Make an Announcement</a>
              </Link>
              <Link to = "/story-upload">
                <a class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green" href="#0">Share a Story</a>
              </Link>
              <Link to = "/project-upload">
                <a class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib blue" href="#0">Add a Project</a>
              </Link>
            </div>                                                                                   
            {/*<SearchBox searchChange = {this.onSearchChange} /> */}
             {/*<a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href =  "#" onClick = {handleClick}>Add Story</a>
            <Link to = "/upload"> Upload a Story </Link> */}
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
    setState({
      users: [ 
      state.users,
              <Card
              key = {0} 
              id = {users[0].id} 
              name  = {users[0].name}
              date = {users[0].date}
              title = {users[0].title}
              description = {users[0].description}
              />]
    })
  }

    
    // const filteredUsers = this.state.users.filter( users => {
    //   return this.users.name.toLowerCase().includes(this.state.search_field.toLowerCase());
    // }) 

    return (
      <Router>
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
          <Route path="/choose">
            <Choose />
          </Route>

        </Switch>
          {/* <CardList users = {filteredUsers} /> */}
      </Router>
    );

}







export default App;
