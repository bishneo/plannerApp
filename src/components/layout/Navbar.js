import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks profile={profile} />
    return (
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to='/' className='brand-logo'>
                    <i className="material-icons planner-logo prefix">calendar_today</i>
                    <span className="planner-text">Planner</span>
                </Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);