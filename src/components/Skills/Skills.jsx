import React, { useState } from 'react';

//CSS Import
import "./Skills.css";

//Component Imports
import { SKILLS } from '../utile/data';
import SCard from './Skills Card/SCard';
import SkillInfoCard from './SkillInfoCard/SkillInfoCard';

function Skills() 
{
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-container">
        <h5>Technical Skills</h5>
        <div className="skills-content">
            <div className="skills"> 
              {SKILLS.map((item) => {
                return <SCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title === item.title} onClick={() => {
                  handleSelectedSkill(item);
                }} />
              })}
            </div>
            <div className="skills-info">
              <SkillInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
            </div>
        </div>
    </section>
  )
}

export default Skills;