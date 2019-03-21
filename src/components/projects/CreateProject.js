import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/')

    }
    render() {
        const { auth } = this.props
        if (!auth.uid) {
            return <Redirect to='signIn' />
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12 l8 offset-l2">
                        <form onSubmit={this.handleSubmit} className="white z-depth-1">
                            <h2 className="grey-text text-darken-3">Create Plan</h2>
                            <div className="input-field">
                                <label htmlFor="title">Ttile</label>
                                <input type="text" id='title' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="title">Project Content</label>
                                <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="input-field center">
                                <button className="btn pink lighten-1 z-depth-0">Create</button>
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
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
