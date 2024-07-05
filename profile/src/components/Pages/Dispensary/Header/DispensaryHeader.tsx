import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../../theme/omnibuilder-logo.png';

const DispensaryHeader: React.FC = () => {
  const intl = useIntl();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const navigationLinks = [
    {
      key: 'dispensary',
      path: '/dispensary',
      label: 'Dispensary.navigation.dispensary',
    },
    { key: 'cbd101', path: '/cbd101', label: 'Dispensary.navigation.cbd101' },
    {
      key: 'aboutMe',
      path: '/aboutMe',
      label: 'Dispensary.navigation.aboutMe',
    },
    {
      key: 'contact',
      path: '/contact',
      label: 'Dispensary.navigation.contact',
    },
  ];

  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt="Logo" />
      </LogoWrapper>
      <LinksContainer>
        {navigationLinks.map(({ key, path, label }) => (
          <LinkOption key={key} className={isActive(path)}>
            <NavLink to={path}>{intl.formatMessage({ id: label })}</NavLink>
          </LinkOption>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default DispensaryHeader;

const headerHeight = 50;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: grey;
  box-shadow: 0px 3px 4px 0px #00000024, 0px 3px 11px -2px #00000003;
  height: ${headerHeight - 1}px;
  margin-bottom: 6px;
  padding: 0 20px; /* Adjust padding as needed */
`;

const LogoWrapper = styled.div`
  width: auto;
  max-width: 145px;
  height: 45px;
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    padding-left: 12px;
    border: 2px solid red;
    object-fit: contain; /* Ensures image scales correctly */
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto; /* Pushes links to the right */
`;

const LinkOption = styled.li`
  margin-right: 20px; /* Adjust margin as needed */
  text-decoration: none;
  color: blue; /* Set link color */

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
`;
