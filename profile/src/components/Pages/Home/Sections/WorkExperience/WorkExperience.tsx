import { useState } from 'react';
import React from 'react';
import { isUndefined } from 'lodash';
import {
  ExpandedDetailsContainer,
  ExperienceCard,
  ExperienceDetails,
  WorkExperienceContainer,
} from './WorkExperience.style';

interface Experience {
  name: string;
  framework: string;
  ide: string;
  technologies: {
    name: string;
    use: string;
  }[];
  certifications?: string[];
  trainings?: string[];
}

const Languages: { [key: string]: { experience: Experience } } = {
  Java: {
    experience: {
      name: 'Java',
      framework: 'Spring',
      ide: 'IntelliJ IDEA',
      technologies: [
        { name: 'Spring Boot', use: 'Backend development' },
        { name: 'Hibernate', use: 'ORM' },
      ],
      certifications: ['Oracle Certified Professional, Java SE'],
      trainings: ['Spring Framework Training'],
    },
  },
  CSharp: {
    experience: {
      name: 'C#',
      framework: '.NET',
      ide: 'Visual Studio',
      technologies: [
        { name: 'ASP.NET', use: 'Web development' },
        { name: 'Entity Framework', use: 'ORM' },
      ],
      certifications: ['Microsoft Certified: Azure Developer Associate'],
      trainings: ['C# Fundamentals for Absolute Beginners'],
    },
  },
  ReactJS: {
    experience: {
      name: 'React JS',
      framework: 'React',
      ide: 'VS Code',
      technologies: [
        { name: 'HTML', use: 'Markup language' },
        { name: 'CSS', use: 'Styling' },
        { name: 'JavaScript', use: 'Web development' },
        { name: 'TypeScript', use: 'Typed superset of JavaScript' },
      ],
      certifications: ['React Developer Certification'],
      trainings: [
        'React - The Complete Guide (incl Hooks, React Router, Redux)',
      ],
    },
  },
  Git: {
    experience: {
      name: 'Git',
      framework: 'Version control system',
      technologies: [
        { name: 'Git CLI', use: 'Command line interface for Git' },
        { name: 'GitHub', use: 'Git repository hosting service' },
        { name: 'GitLab', use: 'Git repository manager' },
      ],
      certifications: ['Git Essentials Certification'],
      trainings: ['Git Complete: The definitive, step-by-step guide to Git'],
      ide: 'Smart Git, Tortoise Git',
    },
  },
  DevOps: {
    experience: {
      name: 'DevOps',
      framework: 'Continuous Integration and Deployment',
      technologies: [
        { name: 'Docker', use: 'Containerization platform' },
        { name: 'Kubernetes', use: 'Container orchestration tool' },
        { name: 'Jenkins', use: 'Automation server' },
      ],
      certifications: ['Certified Kubernetes Administrator (CKA)'],
      trainings: ['DevOps: CI/CD with Jenkins Pipelines, Maven, Docker'],
      ide: 'Jenkins, Bitbucket, Docker',
    },
  },
};

const generateExperienceCard = (
  experience: Experience,
  isOpen: boolean,
  onClick: () => void
): React.ReactNode => {
  return (
    <ExperienceCard key={experience.name} isOpen={isOpen} onClick={onClick}>
      <h3>{experience.name}</h3>
    </ExperienceCard>
  );
};

export const WorkExperience = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const handleCardClick = (name: string) => {
    setOpenCard(openCard === name ? null : name);
  };

  return (
    <>
      <WorkExperienceContainer>
        {Object.keys(Languages).map((languageKey) => {
          const language = Languages[languageKey];
          const isOpen = openCard === languageKey; // Use languageKey instead of language.experience.name
          return generateExperienceCard(
            language.experience,
            isOpen,
            () => handleCardClick(languageKey) // Pass languageKey instead of language.experience.name
          );
        })}
      </WorkExperienceContainer>
      {openCard && Languages[openCard]?.experience && (
        <ExpandedDetailsContainer>
          <h3>{Languages[openCard].experience.name}</h3>
          <ExperienceDetails>
            <p>Framework: {Languages[openCard].experience.framework}</p>
            <p>IDE: {Languages[openCard].experience.ide}</p>
            <h4>Technologies:</h4>
            <ul>
              {Languages[openCard].experience.technologies.map(
                (tech, index) => (
                  <li key={index}>
                    {tech.name}: {tech.use}
                  </li>
                )
              )}
            </ul>
            {!isUndefined(Languages[openCard].experience.certifications) && (
              <>
                <h4>Certifications:</h4>
                <ul>
                  {Languages[openCard]!.experience!.certifications!.map(
                    (cert, index) => (
                      <li key={index}>{cert}</li>
                    )
                  )}
                </ul>
              </>
            )}
            {!isUndefined(Languages[openCard].experience.trainings) && (
              <>
                <h4>Trainings:</h4>
                <ul>
                  {Languages[openCard]!.experience!.trainings!.map(
                    (training, index) => (
                      <li key={index}>{training}</li>
                    )
                  )}
                </ul>
              </>
            )}
          </ExperienceDetails>
          <div onClick={() => setOpenCard(null)}>Close Details</div>
        </ExpandedDetailsContainer>
      )}
    </>
  );
};
