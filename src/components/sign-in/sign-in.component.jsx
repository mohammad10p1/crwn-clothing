import React from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }
    }// end constructor

    handleSubmit = event => {
        event.preventDefault();

        this.setState(
            {
                email: '',
                password: ''
            }
        )
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    // render() {
    //     return (
    //         <div className="sign-in">
    //             <h2>I already have an account</h2>
    //             <span>Sign in with your email and passowrd</span>

    //             <form onSubmit={this.handleSubmit}>
    //                 <input
    //                     name="email"
    //                     type="email"
    //                     value={this.state.email}
    //                     onChange={this.handleChange}
    //                     required>
    //                 </input>
    //                 <label>Email</label>

    //                 <input
    //                     name="password"
    //                     type="password"
    //                     value={this.state.email}
    //                     nChange={this.handleChange}
    //                     required>
    //                 </input>
    //                 <label>Password</label>

    //                 <input type="submit" value="Submit Form"></input>
    //             </form>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and passowrd</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required>
                    </FormInput>

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.email}
                        label="password"
                        handleChange={this.handleChange}
                        required>
                    </FormInput>

                    {/* <input type="submit" value="Submit Form"></input> */}

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;