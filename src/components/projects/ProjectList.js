import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(p => {
                return (
                    <Link to={'/project/' + p.id}>
                        <ProjectSummary project={p} key={p.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList