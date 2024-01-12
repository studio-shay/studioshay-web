'use client'

import { allProjects } from 'contentlayer/generated'
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div className="relative">
      <Fade>
        <ul className="flex flex-nowrap space-x-8 overflow-auto styled-scrollbar snap-x snap-mandatory pr-12">
          {
            allProjects.map((project, index) => {
              return (
                <li key={project.path} className="w-10/12 md:w-5/12 lg:w-[30%] flex-none snap-center snap-always md:snap-start">
                    <div>
                      <div className="aspect-square bg-primary-100 dark:bg-primary-900">
                      </div>
                      <h3 className="my-4 font-semibold text-xl  hover:text-primary-700 dark:text-white dark:hover:text-primary-300">
                        {project.title}
                      </h3>
                      <p>{project.description}</p>
                    </div>
                </li>
              )
            })
          }
        </ul>
      </Fade>
    </div>
  );
}