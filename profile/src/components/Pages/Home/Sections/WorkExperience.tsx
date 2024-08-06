import { useIntl } from 'react-intl';
import { AboutMeContainer } from '../Home.style';
import React from 'react';
import { QuoteChanger } from '../QuoteChanger/QuoteChanger';

interface Experience {
  name: string;
  framework: string;
  ide: string;
  technologies: {
    name: string;
    use: string;
  }[];
  certifications?: any[];
  trainings?: any[];
}

interface Experience {
  name: string;
  framework: string;
  ide: string;
  technologies: {
    name: string;
    use: string;
  }[];
  certifications?: any[];
  trainings?: any[];
}

const Languages = {
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
    } as Experience,
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
    } as Experience,
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
    } as Experience,
  },
};

const FrontEnd = (): React.JSX.Element => {
  const { experience } = Languages.ReactJS;

  return <>{experience.name}</>;
};

const BackEnd = () => {};

const Deployments = () => {};

export const WorkExperience = () => {
  const { formatMessage: f } = useIntl();
  return (
    <AboutMeContainer>
      {FrontEnd()}

      <QuoteChanger />
    </AboutMeContainer>
  );
};
