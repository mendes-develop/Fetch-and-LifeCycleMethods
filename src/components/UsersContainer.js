import React from 'react'
import DisplayUser from './DisplayUser'
// import PropTypes from 'prop-types'

import { Container, Row } from 'react-bootstrap' //styling


const UsersContainer = ({users, deleteUser}) => (

                <Container style={{marginTop : "20px"}}>
                    <Row>

                    {users.map( user => (
                                                            <DisplayUser 
                                                                user={user}  
                                                                key={user.id}
                                                                deleteUser={deleteUser}
                                                            />)
                    )}
                    
                    </Row>
                </Container>

        )

export default UsersContainer;



// Users.propTypes = {
//     deleteUser: PropTypes.func.isRequired,
//     users: PropTypes.object.isRequired
// }

// Users.defaultProps = {
//     user : {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org"
//     }
// }


