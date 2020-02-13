import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function AddUserForm ({addUser}) {

    // state = {
    //     name:"",
    //     username:"",
    //     email:""
    // }
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    // useState()=> [ state.name, this.setState({name:})]

    // const onChange = (event) => {
    //     // const inputValue = event.target.value
    //     // const inputName = event.target.name

    //     // console.log(inputValue)
    //     // console.log(inputName)

    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }

        
        
        
    // onChangeUserName = (event) => {
    //     const inputValue = event.target.value
    //     console.log(inputValue)  
    //     this.setState({
    //         username: inputValue
    //     })
    // }
    // onChangeEmail = (event) => {
    //     const inputValue = event.target.value 
    //     console.log(inputValue) 
    //     this.setState({
    //         email: inputValue
    //     })
    // }


   
        // console.log(this.props)
        // const {name, username, email} = this.state

        return (


            <form
                onSubmit={(event)=> addUser(event, name, username, email)}
            >
                <label>Name</label>
                <input  
                    name="name" 
                    onChange={(event)=> setName(event.target.value)}
                    value={name}
                />
                
                <label>Username</label>
                <input 
                    name="username" 
                    onChange={(event)=> setUsername(event.target.value)}
                    value={username}
                />
            
                <label>Email</label>
                <input
                name="email" 
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
                />
                
                <Button type="submit">
                    Submit
                </Button>

            </form>
        )
    
}