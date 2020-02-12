import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { Card } from 'react-bootstrap' //styling

export default class DisplayUser extends Component {

    //access props and display each element on its own div

    render() {

        // const { deleteUser, user } = this.props

        return (
            <Card style={{ width: '18rem' }}>
            <div>

                <h3>{this.props.user.username}</h3>
                <p>name:{this.props.user.name}</p>
                <p>email:{this.props.user.email}</p>

                <button onClick={()=> this.props.deleteUser(this.props.user.id)}>
                    Delete User 
                </button>
            </div>
        </Card>
        )
    }
}

DisplayUser.propTypes = {
    user : PropTypes.object.isRequired,
    deleteUser : PropTypes.func.isRequired
}



