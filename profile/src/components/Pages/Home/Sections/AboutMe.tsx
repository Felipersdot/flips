import { useIntl } from 'react-intl';
import { AboutMeContainer } from '../Home.style';
import React from 'react';
import { QuoteChanger } from '../QuoteChanger/QuoteChanger';

export const AboutMe = () => {
  const { formatMessage: f } = useIntl();
  return (
    <AboutMeContainer>
      <p>
        {f({ id: 'MainPage.aboutMe' })}
        <em>Education:</em> <br />
        <li>{f({ id: 'MainPage.education' })}</li>
        <li>{f({ id: 'MainPage.certification1' })}</li>
      </p>
      <hr />
      <QuoteChanger />
    </AboutMeContainer>
  );
};
