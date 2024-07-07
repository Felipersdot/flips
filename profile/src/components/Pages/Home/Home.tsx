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

  return (
    <div>
      <AboutMeContainer>
        <p>
          I am a full stack developer, aspiring to make meaningful impacts by
          continuously integrating new findings and studies into current
          practices. I carry a keen interest for the optimization and
          enhancement of current infrastructure by analyzing its fundamentals
          and assessing areas of interest to increase productivity, reduce
          latency, and enhance user experience. I continuously maintain my
          skills by contributing to the APIs of open source projects, reviewing
          documentation, correlating their objectives with the program's ability
          to perform, and assessing the performance metrics to isolate areas of
          possible improvements.
          <br />
          <em>Education:</em> <br />
          - Texas State University, 2015-2021, Bachelors of Arts in Computer
          Science, San Marcos, TX. <br />- Google Data Analytics Certification
        </p>
        <div id="Slider_Container">
          <div className="slider"></div>
          <div id="cuties"></div>
        </div>
      </AboutMeContainer>

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
              <p className="Resources">
                <a href="https://www.amazon.com/Object-Oriented-Programming-Java-Applications/dp/0070678839/ref=asc_df_0070678839/?tag=hyprod-20&linkCode=df0&hvadid=564700895175&hvpos=&hvnetw=g&hvrand=5260419965788948622&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028305&hvtargid=pla-1652091875022&psc=1">
                  Object Oriented Programming with Java: Essentials and
                  Applications : by Dr. Rajkumar Buyya (Author), Dr. S. Thamarai
                  Selvi (Contributor), Mr. Xingchen Chu (Contributor)
                </a>
                <a href="https://www.codecademy.com/learn/learn-java/modules/learn-java-object-oriented-java-u">
                  Code Academy
                </a>{' '}
                <br />
              </p>
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
              <p className="Resources">
                <a href="https://www.amazon.com/Database-Processing-Fundamentals-Design-Implementation/dp/0134802748/ref=sr_1_1?crid=1WJ3Z1PPVB117&keywords=DATABASE+PROCESSING+FUNDAMENTALS%2C+DESIGN%2C+AND+IMPLEMENTATION&qid=1651528749&sprefix=database+processing+fundamentals%2C+design%2C+and+implementation%2Caps%2C111&sr=8-1">
                  Database Processing: Fundamentals, Design, and Implementation
                  15th Edition
                </a>{' '}
                <br />
                <a href="https://grow.google/certificates/data-analytics/#?modal_active=none">
                  Google Data Analytics Certification
                </a>{' '}
                <br />
                <a href="https://www.w3schools.com/sql/default.asp">
                  W3Schools for SQL and PHP
                </a>
              </p>
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
              <p className="Resources">
                <a href="https://www.amazon.com/Operating-System-Concepts-Abraham-Silberschatz/dp/1119800366/ref=sr_1_1_sspa?crid=1X8LMZZ96Q6O8&keywords=operating+systems+concepts&qid=1651529297&sprefix=operating+systems+concepts%2Caps%2C118&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDMUIySzFEQlUzQTkmZW5jcnlwdGVkSWQ9QTA0NzAyNzUyUVY5MFJHNk5QSUomZW5jcnlwdGVkQWRJZD1BMDU4NDQwNDA3MkxVODRaVUROVTQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl">
                  Operating System Concepts 10th Edition by Abraham
                  Silberschatz, Greg Gagne, Peter B. Galvin
                </a>{' '}
                <br />
                <a href="https://www.tutorialspoint.com/operating_system/index.htm">
                  TutorialsPoint for OS
                </a>{' '}
                <br />
              </p>
            </div>
          </CourseContainer>
        </RelativeCourses>
      </EducationContainer>
    </div>
  );
};

export default Home;
