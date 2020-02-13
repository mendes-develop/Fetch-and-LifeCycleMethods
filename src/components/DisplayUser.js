import React from 'react'
// import PropTypes from 'prop-types'


import { Card, Button } from 'react-bootstrap' //styling

const DisplayUser = ( { user, deleteUser } ) => {

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

}

export default DisplayUser

// DisplayUser.propTypes = {
//     user : PropTypes.object.isRequired,
//     deleteUser : PropTypes.func.isRequired
// }


















