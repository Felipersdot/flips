import { useState } from 'react';
import { useIntl } from 'react-intl';
import {
  Course,
  CoursesContainer,
  EducationContainer,
  SchoolName,
  SkillsAndResources,
} from '../Home.style';
import React from 'react';
import {
  JavaOOPStudyResources,
  ProgrammingStudyResources,
  OperatingSystemsStudyResources,
} from 'models/HomePage/Resources';
import {
  OOPConcepts,
  ProgrammingSkillSet,
  OperatingSystemsSkillSet,
} from 'models/HomePage/Skills';

export const EducationSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const { formatMessage: f } = useIntl();

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const renderSkillSet = (enumObject: Record<string, string>) => (
    <SkillsAndResources>
      <div>Skill Set</div>
      {Object.values(enumObject).map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </SkillsAndResources>
  );

  const renderResources = (
    resources: Record<string, { url: string; label: string }>
  ) => (
    <div>
      {Object.values(resources).map((resource, index) => (
        <li key={index}>
          <a href={resource.url}>{resource.label}</a>
        </li>
      ))}
    </div>
  );

  const renderProjectDetailsSection = ({ project, language, ide }) => (
    <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <hr />
      <em>Project:</em> {project} <br />
      <b>Programming Language:</b> {language} <br />
      <b>IDE:</b> {ide}
      <hr />
    </div>
  );

  return (
    <EducationContainer>
      <SchoolName id="TXST">TEXAS STATE UNIVERSITY</SchoolName>
      <CoursesContainer>
        <Course className={openIndexes.includes(0) ? 'open' : ''}>
          <button
            className="accordion-control"
            onClick={() => toggleAccordion(0)}
          >
            Object Orientated Programming (OOP)
          </button>
          <div className="accordion-panel">
            {f({ id: 'MainPage.OOP.Overview' })}
            {renderProjectDetailsSection({
              project: 'MP3 media player',
              language: 'Java',
              ide: 'Eclipse',
            })}
            {f({ id: 'MainPage.OOP.skillGained' })}
            {renderSkillSet(OOPConcepts)}
            {renderResources(JavaOOPStudyResources)}
          </div>
        </Course>

        <Course className={openIndexes.includes(1) ? 'open' : ''}>
          <button
            className="accordion-control"
            onClick={() => toggleAccordion(1)}
          >
            Database system design
          </button>
          <div className="accordion-panel">
            {f({ id: 'MainPage.ProgrammingSkillSet.Overview' })}
            {renderProjectDetailsSection({
              project: 'E-Commerce Platform',
              language: ' HTML, CSS, JS, PHP, MySql',
              ide: 'Virtual Studio Code (VS Code)',
            })}
            {f({ id: 'MainPage.ProgrammingSkillSet.skillGained' })}
            {renderSkillSet(ProgrammingSkillSet)}
            {renderResources(ProgrammingStudyResources)}
          </div>
        </Course>

        <Course
          className={openIndexes.includes(2) ? 'open' : ''}
          onClick={() => toggleAccordion(2)}
        >
          <button className="accordion-control">Operating Systems</button>
          <div className="accordion-panel">
            {f({ id: 'MainPage.OperatingSystemsSkillSet.Overview' })}
            {renderProjectDetailsSection({
              project: 'CPU scheduling simulator.',
              language: 'C',
              ide: 'Xcode',
            })}
            {f({ id: 'MainPage.OperatingSystemsSkillSet.skillGained' })}
            {renderSkillSet(OperatingSystemsSkillSet)}
            {renderResources(OperatingSystemsStudyResources)}
          </div>
        </Course>
      </CoursesContainer>
    </EducationContainer>
  );
};
