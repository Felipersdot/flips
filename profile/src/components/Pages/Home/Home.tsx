import React, { useState } from 'react';
import {
  AboutMeContainer,
  CourseContainer,
  EducationContainer,
  RelativeCourses,
  SchoolName,
  SkillsAndResources,
} from './Home.style';
import {
  OOPConcepts,
  OperatingSystemsSkillSet,
  ProgrammingSkillSet,
} from 'models/HomePage/Skills';
import {
  JavaOOPStudyResources,
  OperatingSystemsStudyResources,
  ProgrammingStudyResources,
} from 'models/HomePage/Resources';
import { useIntl } from 'react-intl';

const AboutMe = (): React.JSX.Element => {
  const { formatMessage: f } = useIntl();
  return (
    <AboutMeContainer>
      <p>
        {f({ id: 'MainPage.aboutMe' })}
        <em>Education:</em> <br />
        <li>{f({ id: 'MainPage.education' })}</li>
        <li>{f({ id: 'MainPage.certification1' })}</li>
      </p>
      <div id="Slider_Container">
        <div className="slider"></div>
        <div id="cuties"></div>
      </div>
    </AboutMeContainer>
  );
};

const Home = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  function renderSkillSet(enumObject: Record<string, string>) {
    return (
      <SkillsAndResources>
        <div>Skill Set</div>
        {Object.values(enumObject).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </SkillsAndResources>
    );
  }

  const renderResources = (
    resources: Record<string, { url: string; label: string }>
  ) => {
    return (
      <div>
        {Object.values(resources).map((resource, index) => (
          <li>
            <a href={resource.url} key={index}>
              {resource.label}
            </a>
          </li>
        ))}
      </div>
    );
  };

  return (
    <div>
      <AboutMe />
      <div id="Slider_Container">
        <div className="slider"></div>
        <div id="cuties"></div>
      </div>

      <EducationContainer>
        <SchoolName id="TXST">TEXAS STATE UNIVERSITY</SchoolName>
        <RelativeCourses>
          <CourseContainer className={openIndexes.includes(0) ? 'open' : ''}>
            <button
              className="accordion-control"
              onClick={() => toggleAccordion(0)}
            >
              Object Orientated Programming (OOP)
            </button>
            <div className="accordion-panel">
              <p id="Overview">
                The course covers object-oriented design principles and
                programming for students with prior programming experience. The
                modules cover object-oriented analysis, design process, and
                programming in Java.
              </p>
              <hr />
              <p id="Projects">
                <em>Project:</em> MP3 media player <br />
                <b>Programming Language:</b> Java <br />
                <b>IDE:</b> Eclipse
              </p>
              <p id="skills">
                UML diagrams were used to solidify associations between classes,
                interfaces, and proper data structures within classes, to ensure
                cohesive operations between instances of multiple classes.
                Design patterns such as Façade, Decorator, and Observer were
                used between the development of the classes. Allowing instances
                of classes to be responsive based on the appropriate events that
                were taking place by their respective instances. This was
                ensured by using core Java concepts related to Object Oriented
                Programming: Inheritance, Encapsulation, Polymorphism, and Data
                abstraction. Finally, examining code by testing for exceptions
                and refactoring master code to its GUI using the Java Swing
                Library. Finalizing all documentation on the API and releasing
                sets for general users and developers respectively.
              </p>
              {renderSkillSet(OOPConcepts)}
              {renderResources(JavaOOPStudyResources)}
            </div>
          </CourseContainer>
          <CourseContainer className={openIndexes.includes(1) ? 'open' : ''}>
            <button
              className="accordion-control"
              onClick={() => toggleAccordion(1)}
            >
              Database system design
            </button>
            <div className="accordion-panel">
              <p id="Overview">
                database system organization with the management and design of
                data, data models, data modeling theory, optimization,
                normalization, integrity constraints, and query languages. The
                application database system design, implementation, and data
                modeling techniques for solving real world problems will be
                emphasized.
              </p>
              <hr />
              <p id="Projects">
                <b>Project:</b> Implement an E-Commerce Platform <br />
                <b>Programming Language:</b> HTML, CSS, JS, PHP, MySql <br />
                <b>IDE:</b> Virtual Studio Code (VS Code)
              </p>
              <p id="skills">
                Implementing a dynamic application that handles requests and
                data presented by the user. Implementation was done using HTML
                CSS JS PHP and SQL. Implementation of database design was done
                using concepts of normalization of the 3rd degree. Event-driven
                programming skills were integrated to dynamically break data
                entries given by users and interact with the DBMS as needed.
                Advanced SQL techniques will then be used to redesign the
                architecture of the database while maintaining the integrity of
                the data.
              </p>
              {renderSkillSet(ProgrammingSkillSet)}
              {renderResources(ProgrammingStudyResources)}
            </div>
          </CourseContainer>
          <CourseContainer
            className={openIndexes.includes(2) ? 'open' : ''}
            onClick={() => toggleAccordion(2)}
          >
            <button className="accordion-control">Operating Systems</button>
            <div className="accordion-panel">
              <p id="Overview">
                course covers the principles of operating systems, algorithms
                for CPU scheduling, memory management, cooperating sequential
                processes and device management.
              </p>
              <hr />
              <p id="Projects">
                <b>Project:</b> Implement a CPU scheduling simulator. <br />
                <b>Programming Language:</b> C <br />
                <b>IDE:</b> Xcode
              </p>
              <p id="skills">
                Understand inter-process communication (IPC) mechanisms such as
                semaphores, monitors, event counts, message passing, etc. Be
                exposed to traditional solutions of IPC problems using these
                mechanisms (e.g., Dining Philosophers, Reader/Writer, Bounded
                Buffer, Barrier Problems, etc.). Understand what a driver
                is-what its relationship is to other components such as the
                interrupt system and file system. Look at details of at least
                one driver in some operating system. Be exposed to significant
                sections of code from 'real' operating systems.
              </p>
              {renderSkillSet(OperatingSystemsSkillSet)}
              {renderResources(OperatingSystemsStudyResources)}
            </div>
          </CourseContainer>
        </RelativeCourses>
      </EducationContainer>
    </div>
  );
};

export default Home;
