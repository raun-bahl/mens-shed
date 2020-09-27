import React, {Component} from 'react';
import CardList from './CardList';
import Card from './Card';
import SearchBox from './SearchBox';
import { users } from './users';

export class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      search_field: ''
    }
  }

  // componentDidMount() {
    //might need this later
  // }

  onSearchChange = (event) => {
    this.setState({search_field: event.target.value})
  }


   handleClick = () => {
    this.setState({
      users: [this.state.users, 
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

  render() {
    {/*
    const filteredUsers = this.state.users.filter( users => {
      return users.name.toLowerCase().includes(this.state.search_field.toLowerCase());
    }) */}

    return (
      <div className = "tc">
        <div className = "main-display">
          <h1 className = "f-subheadline lh-title"> Men's Shed App </h1>                                                                      
          <SearchBox searchChange = {this.onSearchChange} />
          <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href =  "#" onClick = {this.handleClick} >Add Story</a>
        </div>   
         {this.state.users}     
        {/* <CardList users = {filteredUsers} /> */}
      </div>
    );
  }

}



export default App;
