import React from 'react'

export default class AddUserForm extends React.Component {

    state = {
        name:"",
        username:"",
        email:""
    }

    onChange = (event) => {
        // const inputValue = event.target.value
        // const inputName = event.target.name

        // console.log(inputValue)
        // console.log(inputName)

        this.setState({
            [event.target.name] : event.target.value
        })
    }

        
        
        
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


    render(){
        // console.log(this.props)
        const {name, username, email} = this.state

        return (


            <form
                onSubmit={(event)=> this.props.addUser(event, name, username, email)}
            >
                <label>Name</label>
                <input  
                    name="name" 
                    onChange={(event)=> this.onChange(event)}
                    value={name}
                />
                
                <label>Username</label>
                <input 
                    name="username" 
                    onChange={(event)=> this.onChange(event)}
                    value={username}
                />
            
                <label>Email</label>
                <input
                name="email" 
                value={email}
                onChange={(event)=> this.onChange(event)}
                />
                
                <button type="submit">
                    Submit
                </button>

            </form>
        )
    }
}