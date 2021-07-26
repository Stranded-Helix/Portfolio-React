import React, { useEffect, useState } from 'react';
import About from '../../components/About';
import ProjectHeader from '../../components/ProjectHeader';
import ProjectLeft from '../../components/ProjectLeft';
import ProjectRight from '../../components/ProjectRight';
import {useProjects} from '../../components/ProjectContext/ProjectContext.js';
import Contact from '../../components/Contact';



export default function Portfolio() {

    const projects = useProjects();

    return (
        <div className="center">
            <div className="col s6 m6 l6 xl6">
                <About/>
                <ProjectHeader/>
                <ProjectLeft project={projects[0]}/>
                <ProjectRight project={projects[1]}/>
                <ProjectLeft project={projects[2]}/>
                <ProjectRight project={projects[3]}/>
                <ProjectLeft project={projects[4]}/>
                <ProjectRight project={projects[5]}/>
                <Contact/>
            </div>
        </div>

    )
}