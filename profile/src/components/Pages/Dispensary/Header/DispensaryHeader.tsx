import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import { LogoHeight, colors, fontSizes, fonts } from '../../../SharedThemes';
import { MEDIUM_DEVICE_WIDTH } from '../../../../utils/browserUtils';
import Logo from '../../../../theme/omnibuilder-logo.png';

const DispensaryHeader: React.FC = () => {
    const intel = useIntl();
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    const navigationLinks = [
        <LinkOption key={`dispensary`} className={`${isActive('/dispensary')}`}>
            <NavLink to="/dispensary">{intel.formatMessage({ id: 'Dispensary.navigation.dispensary' })}</NavLink>
        </LinkOption>,
        <LinkOption key={`cbd101`} className={`${isActive('/cbd101')}`}>
            <NavLink to="/cbd101">{intel.formatMessage({ id: 'Dispensary.navigation.cbd101' })}</NavLink>
        </LinkOption>,
        <LinkOption key={`aboutMe`} className={`${isActive('/aboutMe')}`}>
            <NavLink to="/aboutMe">{intel.formatMessage({ id: 'Dispensary.navigation.aboutMe' })}</NavLink>
        </LinkOption>,
        <LinkOption key={`contact`} className={`${isActive('/contact')}`}>
            <NavLink to="/contact">{intel.formatMessage({ id: 'Dispensary.navigation.contact' })}</NavLink>
        </LinkOption>
    ];

    return (
        <Container>
            <LogoWrapper>{<img src={Logo} alt="Logo" />}</LogoWrapper>
            <LinkContainer2>
                <LinksContainer>{navigationLinks.map((c) => c)}</LinksContainer>
            </LinkContainer2>
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
    margin-bottom: 6px;
`;

const LogoWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    img {
        padding-left: 12px;
        align-self: center;
        border: 2px solid red;

        @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
            height: 45px;
        }
    }
`;

const LinkContainer2 = styled.div`
    display: flex;
`;

const LinksContainer = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    flex: 2 auto;
    justify-content: start;

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
            box-shadow: inset 0 -4px 0 white;
        }
    }

    // @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
    //     display: none;
    // }
`;


// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;


const LinkOption = styled.li`
    margin-right: 10px; /* Adjust the margin as needed */
    text-decoration: none;
    color: blue; /* Set the desired link color */
`;
