import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Ім'я" onChange={(e) => this.setState({ first_name: e.target.value })}></input>
                <input placeholder="Фамілія" onChange={(e) => this.setState({ last_name: e.target.value })}></input>
                <textarea placeholder="Біографія" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Вік" onChange={(e) => this.setState({ age: e.target.value })}></input>
                <label htmlFor="isHappy">Щасливі?</label>
                <input type="checkbox" id="isHappy" placeholder="Чи щасливі ви?" onChange={(e) => this.setState({ isHappy: e.target.value })}></input>
                <button type="button" onClick={() =>{
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                    last_name: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
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