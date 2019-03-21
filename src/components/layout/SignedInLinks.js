import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const { signOut, profile } = props
    return (
        <ul className="right">
            <li>
                <NavLink to='/createProject' id='createPlan' className='btn btn-floating blue lighten-1 pulse'>
                    <i className="material-icons">create</i>
                </NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink>
            </li>
            <li><a onClick={signOut}>Sign Out</a>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);