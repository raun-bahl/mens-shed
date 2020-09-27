import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { users } from './users';

export class App extends Component {

  constructor() {
    super()
    this.state = {
      users: users,
      search_field: ''
    }
  }

  // componentDidMount() {
    //might need this later
  // }

  onSearchChange = (event) => {
    this.setState({search_field: event.target.value})
  }

  render() {
    const filteredUsers = this.state.users.filter( users => {
      return users.name.toLowerCase().includes(this.state.search_field.toLowerCase());
    })

    return (
      <div className = "tc">
        <h1> Men's Shed App </h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <CardList users = {filteredUsers} />
      </div>
    );
  }

}



export default App;
