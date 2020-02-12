import React, { Component } from 'react'
import DisplayUser from './DisplayUser'
// import PropTypes from 'prop-types'

import { Container, Row } from 'react-bootstrap' //styling


export default class UsersContainer extends Component {

    render() {
        console.log(this.props.users)
        return (
            <Container style={{marginTop : "20px"}}>
                <Row>

                {this.props.users.map( (user , index) => (
                                                        <DisplayUser 
                                                            user={user}  
                                                            key={index}
                                                            deleteUser={this.props.deleteUser}
                                                        />)
                )}
                
                </Row>
            </Container>
                
        )
    }
}



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


