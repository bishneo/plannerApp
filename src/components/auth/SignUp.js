import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props
        if (auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
                        <form onSubmit={this.handleSubmit} className="white z-depth-1">
                            <h2 className="grey-text text-darken-3">Sign Up</h2>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id='firstName' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type='text' id='lastName' onChange={this.handleChange} />
                            </div>
                            <div className="input-field center">
                                <button className="btn waves-effect pink lighten-1">Sign Up</button>
                                <p className="red-text center text-darken-3">{authError}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)