import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { Card, Button } from 'react-bootstrap' //styling

export default function DisplayUser ({user, deleteUser}) {

    //access props and display each element on its own div

 

    

        // const { deleteUser, user } = this.props

        return (
            <Card  style={{ width: '18rem' }} >
            <div>

                <h3>{user.username}</h3>
                <p>name:{user.name}</p>
                <p>email:{user.email}</p>

                <Button variant="danger" onClick={ () => deleteUser(user.id)}>
                    Delete User 
                </Button>
            </div>
        </Card>
        )
    

    // componentDidMount(){
    // console.log("'I mount, therefore I am.' DisplayUser Component")  
    // console.log("\n")
    // } 

    // componentDidUpdate(){
    // console.log("I updated! DisplayUser Component")
    // console.log("\n")
    // }

    // componentWillUnmount(){
    //     console.log("Here lies a great DisplayUser Component")
    //     window.alert("user will be destroyed")
    // }


}

// DisplayUser.propTypes = {
//     user : PropTypes.object.isRequired,
//     deleteUser : PropTypes.func.isRequired
// }


















