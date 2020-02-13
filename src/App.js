import React, { useState, useEffect } from 'react';
import UsersContainer from './components/UsersContainer';
import AddUserForm from './components/AddUserForm';
import './App.css'
import { Container, Row } from 'react-bootstrap'


export default function App(){

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     users : []
  //   }
  // }
  const [users, setUsers] = useState([])

  useEffect( ()=> {

      fetch('http://localhost:3004/users/')
     .then((resp) => resp.json())
     .then(usersArray => {
      //  this.setState({
      //    users: usersArray
      //  })
      setUsers(usersArray)
     })
  }, [])

  // useEffect(()=> {

  // }, [users] )

  // componentDidMount(){

  //   fetch('http://localhost:3004/users/')
  //    .then((resp) => resp.json())
  //    .then(usersArray => {
  //      this.setState({
  //        // users: [...this.state.users, newUser]
  //        users: usersArray
  //      })
  //    })
  //  } 

  //arguments coming from usersForm
  const addUser = (event, name, username, email) =>{ 
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

          setUsers(users.concat(user))

          // this.setState({
          //   users: this.state.users.concat(user)
          // })
      })
   }



    // Adding user to our state
    // this.setState({
    //   // users: [...this.state.users, newUser]
    //   users: this.state.users.concat(newUser)
    // })

  // Deleting user from our state
  const deleteUser = (id) => {

     fetch(`http://localhost:3004/users/${id}`, {
         method: "DELETE",
         headers: {
             'Content-Type': 'application/json'
         }
      })
     .then(resp => {
       if (resp.status === 200){
        // this.setState({
        //     users: this.state.users.filter( user => user.id !== id)
        //   })
        // setUsers()
        setUsers(users.filter( user => user.id !== id))
       }
      }) 
  }

  
  
    // console.log("rendering")
    return (
      <Container>
      <Row>
      
            <AddUserForm  addUser={addUser}/>
            <UsersContainer 
              users={users.reverse()}
              deleteUser={deleteUser}
            />
          
            </Row>
          </Container>
    );
    
  


  

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
//         fetch(`http://localhost:3000/users/${id}`, {
//             method: "PATCH", //                          "PUT"=> UPDATES ALL ATTRIBUTES
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

