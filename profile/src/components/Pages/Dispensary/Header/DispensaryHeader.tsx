import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIUM_DEVICE_WIDTH } from '../../../../utils/browserUtils';
import Logo from '../../../../theme/omnibuilder-logo.png';

const DispensaryHeader: React.FC = () => {
  const intel = useIntl();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const navigationLinks = [
    <LinkOption key={`home`} className={`${isActive('/home')}`}>
      <NavLink to="/home">
        {intel.formatMessage({ id: 'Navigation.home' })}
      </NavLink>
    </LinkOption>,
    <LinkOption key={`contact`} className={`${isActive('/contact')}`}>
      <NavLink to="/contact">
        {intel.formatMessage({ id: 'Navigation.contact' })}
      </NavLink>
    </LinkOption>,
    <LinkOption key={`investments`} className={`${isActive('/investments')}`}>
      <NavLink to="/investments">
        {intel.formatMessage({ id: 'Navigation.investments' })}
      </NavLink>
    </LinkOption>,
    <LinkOption key={`newsFeed`} className={`${isActive('/newsFeed')}`}>
      <NavLink to="/newsFeed">
        {intel.formatMessage({ id: 'Navigation.newsFeed' })}
      </NavLink>
    </LinkOption>,
    <LinkOption key={`endeavors`} className={`${isActive('/endeavors')}`}>
      <NavLink to="/endeavors">
        {intel.formatMessage({ id: 'Navigation.endeavors' })}
      </NavLink>
    </LinkOption>,
    <LinkOption key={`projects`} className={`${isActive('/projects')}`}>
      <NavLink to="/projects">
        {intel.formatMessage({ id: 'Navigation.projects' })}
      </NavLink>
    </LinkOption>,
    <LinkOption key={`references`} className={`${isActive('/references')}`}>
      <NavLink to="/references">
        {intel.formatMessage({ id: 'Navigation.references' })}
      </NavLink>
    </LinkOption>,
  ];

  return (
    <Container>
      <LogoWrapper>{<img src={Logo} alt="Logo" />}</LogoWrapper>
      <LinksContainer>{navigationLinks.map((c) => c)}</LinksContainer>
    </Container>
  );
};

export default DispensaryHeader;

const headerHeight = 50;
const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: grey;
  box-shadow: 0px 3px 4px 0px #00000024, 0px 3px 11px -2px #00000003;

  height: ${headerHeight - 1}px;
  margin-bottom: 15px;
`;

const LogoWrapper = styled.div`
  width: auto;
  max-width: 145px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    padding-left: 12px;
    align-self: center;
    border: 2px solid red;

    @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
      height: 45px;
    }
  }
`;

const LinksContainer = styled.ul`
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
const LinkOption = styled.li`
  margin-right: 10px; /* Adjust the margin as needed */
  text-decoration: none;
  color: blue; /* Set the desired link color */
`;
