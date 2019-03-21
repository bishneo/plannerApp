import React from 'react'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <span>Posted by </span>
                <span className='pink-text'>{project.authorFirstName} {project.authorLastName}</span>
                <p className="grey-text">{moment(project.createdAt.toDate()).format('MMMM Do YYYY, hh:mm a')}</p>
            </div>
        </div>
    )
}
export default ProjectSummary