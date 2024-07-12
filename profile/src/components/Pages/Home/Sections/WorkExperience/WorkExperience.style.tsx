import styled from 'styled-components';

export const WorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-height: 500px;
  overflow-x: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

export const ExperienceCard = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${({ isOpen }) => (isOpen ? 'lightpink' : 'lightblue')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: max-height 0.3s ease, width 0.3s ease;

  h3 {
    background-color: ${({ isOpen }) => (isOpen ? 'lightpink' : 'lightblue')};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ExpandedDetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-top: 20px;
`;

export const ExperienceDetails = styled.div`
  margin-top: 10px;
`;
