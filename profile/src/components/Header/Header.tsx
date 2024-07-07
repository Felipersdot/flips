import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../theme/omnibuilder-logo.png';
import { Container, LinkOption, LinksContainer } from './Header.style';

const navigationLinks = [
  { key: 'home', to: '/home' },
  { key: 'contact', to: '/contact' },
  { key: 'investments', to: '/investments' },
  { key: 'newsFeed', to: '/newsFeed' },
  { key: 'endeavors', to: '/endeavors' },
  { key: 'projects', to: '/projects' },
  { key: 'references', to: '/references' },
];

const Header: React.FC = () => {
  const intl = useIntl();
  const location = useLocation();

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <LinksContainer>
        {navigationLinks.map(({ key, to }) => (
          <LinkOption
            key={key}
            className={location.pathname === to ? 'active' : ''}
          >
            <NavLink to={to}>
              {intl.formatMessage({ id: `Navigation.${to.slice(1)}` })}
            </NavLink>
          </LinkOption>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Header;
