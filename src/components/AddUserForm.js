import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function AddUserForm ({ addUser }) {

        const [name, setName] = useState("");
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("")

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