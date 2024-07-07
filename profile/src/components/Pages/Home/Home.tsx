import React from 'react';
import { AboutMeContainer, SchoolName } from './Home.style';
import { EducationSection } from './Sections/EducationSection';
import { AboutMe } from './Sections/AboutMe';

const WorkExperienceSection = () => {
  return (
    <AboutMeContainer>
      <SchoolName id="TXST">WORK EXPERIENCE </SchoolName>
      FIX THIS LATER
      <hr />
    </AboutMeContainer>
  );
};

const Home = () => {
  return (
    <div>
      <AboutMe />
      <EducationSection />
      <WorkExperienceSection />
    </div>
  );
};

export default Home;
