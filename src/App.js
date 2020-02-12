import React, { Component } from 'react';
import UsersContainer from './components/UsersContainer';
import AddUserForm from './components/AddUserForm';

import { Container, Row } from 'react-bootstrap'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      users : [
        {
        "id": 1,
        "name": "Brian Thomas",
        "username": "Brian",
        "email": "Sincere@april.biz"
        },
        {
        "id": 2,
        "name": "Bryson Boyd",
        "username": "Bryson",
        "email": "Shanna@melissa.tv"
        },
        {
        "id": 3,
        "name": "Jaylen Peebles",
        "username": "Jaylen",
        "email": "Nathan@yesenia.net"
        },
        {
        "id": 4,
        "name": "Joseph Mills",
        "username": "Joseph",
        "email": "Nathan@yesenia.net"
        },
        {
        "id": 5,
        "name": "justin Knight",
        "username": "justin",
        "email": "Nathan@yesenia.net"
        },
        {
        "id": 6,
        "name": "Kanen Borrero",
        "username": "Kanen",
        "email": "Nathan@yesenia.net"
        },
        {
        "id": 7,
        "name": "Liam Simko",
        "username": "Liam",
        "email": "Nathan@yesenia.net"
        },
        {
        "id": 8,
        "name": "Kobi Hsu",
        "username": "Kobi",
        "email": "Nathan@yesenia.net"
        },
        {
        "id": 9,
        "name": "Michael Delrosario",
        "username": "Michael",
        "email": "Nathan@yesenia.net"
        }
        ]
    }
  }

  //arguments coming from usersForm
  addUser = (event, name, username, email) =>{ 
    event.preventDefault()
    const newUser = {
      id: (this.state.users.length + 1),
      name: name,
      username: username,
      email: email
    }
    // Adding user to our state
    this.setState({
      // users: [...this.state.users, newUser]
      users: this.state.users.concat(newUser)
    })
  }

// Deleting user from our state
  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter( user => user.id !== id)
    })
  }

  render(){
    return (
          <Container>
          <Row>

            <AddUserForm  addUser={this.addUser}/>
            <UsersContainer 
              users={this.state.users}
              deleteUser={this.deleteUser}
            />
          
          </Row>
          </Container>
      
    );

  }
}
