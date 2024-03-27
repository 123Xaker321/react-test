import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            avatar: ""
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Ім'я" onChange={(e) => this.setState({ first_name: e.target.value })}></input>
                <input placeholder="Фамілія" onChange={(e) => this.setState({ last_name: e.target.value })}></input>
                <input placeholder="Електронна пошта" onChange={(e) => this.setState({ email: e.target.value })}></input>
                <input placeholder="Аватар" onChange={(e) => this.setState({ avatar: e.target.value })}></input>
                <button type="button" onClick={() =>{
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    avatar: this.state.avatar,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    
                    this.props.onAdd(this.userAdd)
                    }
                }>Додати</button>
            </form>
        )
    }
}

export default AddUser