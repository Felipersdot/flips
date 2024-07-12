import React from 'react';
import { EducationSection } from './Sections/EducationSection';
import { AboutMe } from './Sections/AboutMe';
import { WorkExperience } from './Sections/WorkExperience/WorkExperience';

const Home = () => {
  return (
    <div>
      <AboutMe />
      <EducationSection />
      <WorkExperience />
    </div>
  );
};

export default Home;
