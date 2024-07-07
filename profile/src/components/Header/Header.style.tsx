import styled from 'styled-components';
import { MEDIUM_DEVICE_WIDTH } from 'utils/browserUtils';

const headerHeight = 50;
export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: grey;
  box-shadow: 0px 3px 4px 0px #00000024, 0px 3px 11px -2px #00000003;

  height: ${headerHeight - 1}px;
  margin-bottom: 15px;
  position: sticky;
  top: 0;
  z-index: 1000; /* Ensure it stays on top of other content */

  img {
    max-width: 145px;
    max-height: 100%;
    padding-left: 12px;
    align-self: center;
    @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
      height: 45px;
    }
  }
`;

export const LinksContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex: 7 auto; /* Takes 70% of the header */
  justify-content: flex-start; /* Align links to the left */

  li {
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.15s;
    letter-spacing: 1.28px;
    margin-left: 40px;
    text-align: center;
    opacity: 1;

    a {
      color: white;
      opacity: 0.6;
      text-decoration: none;
      transition: opacity 0.2s ease-in-out;

      &.active,
      :hover {
        opacity: 1;
      }

      &.active {
        font-weight: 500;
      }
    }

    &.active {
      box-shadow: inset 0 -2px 0 white;
    }
  }
`;
export const LinkOption = styled.li`
  margin-right: 10px; /* Adjust the margin as needed */
  text-decoration: none;
  color: blue; /* Set the desired link color */
`;
