import React, { useEffect } from 'react';
import UsersContainer from './components/UsersContainer';
import AddUserForm from './components/AddUserForm';

import { Container, Row } from 'react-bootstrap'
import './App.css'

//Redux 
import { useSelector, useDispatch } from "react-redux";

const URL = 'http://localhost:3004/users/'


export default function App (){

  // const [users, setUsers] = useState([])
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect( () => {

    fetch(URL)
    .then((resp) => resp.json())
    .then(usersArray => {

      ////dispatch( action ==== { type: "GET_USERS", payload: data }  )  data = [users]
      dispatch({type: "GET_USERS", payload: usersArray})

    })

  }, [dispatch])

  const addUser = (event, name, username, email) => { 
    event.preventDefault()

            fetch( URL , {
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

          // setUsers(users.concat(user))
          dispatch({type: "ADD_USER", payload: user})
          

      })
  }


  const deleteUser = (id) => {

     fetch( URL + id, {
         method: "DELETE",
         headers: {
             'Content-Type': 'application/json'
         }
      })
     .then(resp => {
       if (resp.status === 200){

        // setUsers( users.filter( user => user.id !== id) )
        dispatch({type: "REMOVE_USER", payload: id})
       }
      }) 
  }

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

