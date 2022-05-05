import { Component } from "react";

export class Input extends Component{

    state = {value: '', isActive: false};
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleClick = () => {
        this.setState({value: this.passwordGenerator});
    }

    clearInput = () => {
        this.setState({value: ''});
    }

    handleCheckboxChange = () => {
        this.setState({isActive: !this.state.isActive})
    }

    passwordGenerator = () => {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let length = 10;
        let password = 'hello';

        for (let i = 0; i <= length; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }

        this.setState({value: password});
    }

    render () {
        return (
            <div className="Input">

                <div className="input-field">

                <label htmlFor="password">
                    Name: 
                    <input 
                        id="password"
                        name="password"
                        type={this.state.isActive ? 'text' : 'password'}
                        onChange={this.handleChange}
                        value={this.state.value}
                        placeholder='Type your address ...'
                    />
                </label>
                <button onClick={this.clearInput}>X</button>
                </div>
                <label htmlFor="pswd">

                    {this.state.isActive ? 'Hide' : 'Show'} password: 
                    <input 
                        name="pswd" 
                        type="checkbox" 
                        checked={this.state.isActive} 
                        onChange={this.handleCheckboxChange}
                    />

                </label>
                <button onClick={this.handleClick}>Generate Random Password</button>
            </div>
        );
    }
}