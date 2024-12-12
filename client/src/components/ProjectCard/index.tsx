import { Project } from '@/state/api'
import React from 'react'

type Props = {
   project: Project

}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className='rounded border p-4 shadow hover:dark:bg-dark-tertiary hover:shadow-xl hover:bg-gray-200 hover:dark:border-none mb-5'>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
      
    </div>
  )
}

export default ProjectCard