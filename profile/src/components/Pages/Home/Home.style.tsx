import styled from 'styled-components';

export const SchoolName = styled.h3`
  margin-bottom: 7px;
`;

export const StyledButton = styled.button`
  border: none;
`;

export const AboutMeContainer = styled.div`
  margin: 10px 0px 50px 5px;
`;

export const EducationContainer = styled.div`
  margin: 10px 0px 50px 5px;
`;

export const RelativeCourses = styled.div``;

export const CourseContainer = styled.div`
  border: 2px solid black;
  margin-bottom: 25px;
  padding: 5px;

  .accordion-panel {
    display: none;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }

  &.open {
    .accordion-panel {
      display: block;
      max-height: 500px; /* Adjust the max-height to fit your content */
    }
  }
`;

export const SkillsAndResources = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid grey;
  padding: 5px;

  li {
    flex: 0 0 calc(33.33% - 20px); /* Adjust width to fit 3 items per row with gap */
    padding: 5px;
    list-style-type: none;
  }
`;
