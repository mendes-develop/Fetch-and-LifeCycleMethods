import React, { Component } from 'react';
import UsersContainer from './components/UsersContainer';
import AddUserForm from './components/AddUserForm';
import './App.css'
import { Container, Row } from 'react-bootstrap'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      users : []
    }
  }

  //arguments coming from usersForm
  addUser = (event, name, username, email) =>{ 
    event.preventDefault()

            fetch(`http://localhost:3004/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 name: name,
                 username: username,
                 email: email
            })
        })
        .then(resp => resp.json())
        .then(user => {

          this.setState({
            users: this.state.users.concat(user)
          })
      })
   }



    // Adding user to our state
    // this.setState({
    //   // users: [...this.state.users, newUser]
    //   users: this.state.users.concat(newUser)
    // })

  // Deleting user from our state
  deleteUser = (id) => {

     fetch(`http://localhost:3004/users/${id}`, {
         method: "DELETE",
         headers: {
             'Content-Type': 'application/json'
         }
      })
     .then(resp => {
       if (resp.status === 200){
        this.setState({
            users: this.state.users.filter( user => user.id !== id)
          })
       }
      })


    
  }

  
  render(){
    // console.log("rendering")
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


  componentDidMount(){

   fetch('http://localhost:3004/users/')
    .then((resp) => resp.json())
    .then(usersArray => {
      this.setState({
        // users: [...this.state.users, newUser]
        users: usersArray
      })
    })
  } 

  // componentDidUpdate(){
  //   console.log("I updated! App Component")
  //    console.log("\n")
  // }

}
  
  
  







// GETTING USERS
//fetch('http://localhost:3000/users')
//.then(resp => resp.json())
//.then(usersData => console.log(usersData))



// ADDING USER
//         fetch(`http://localhost:3000/users`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                  "name": "Brian Thomas",
//                  "username": "Brian",
//                  "email": "Sincere@april.biz"
//             })
//         })
//         .then(resp => resp.json())
//         .then(data => data)
//      
// 



// DELETING USER
//      fetch(`http://localhost:3000/users/${id}`, {
//          method: "DELETE",
//          headers: {
//              'Content-Type': 'application/json',
//          }
//       })
//      .then(resp => console.log(resp.status))
// 



// MODIFYING A USER
//         fetch(`http://localhost:3000/users/${1}`, {
//             method: "PATCH", //     "PUT"=> UPDATES ALL ATTRIBUTES
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                  "name": "ALEX Thomas"
//             })
//         })
//         .then(resp => resp.json())
//         .then(data => console.log(data))
//       
// 

