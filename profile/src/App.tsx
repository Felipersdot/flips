import React, { Suspense, lazy } from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useStores } from './hooks/useStores';
import { IntlStore } from './stores/IntlStore';
import { DEFAULT_THEME } from './stores/ThemeStore';
import Loader from './components/Loader';
import NotificationProvider from './components/Notification/NotificationProvider';
import { MEDIUM_DEVICE_WIDTH } from './utils/browserUtils';
import ChangeAnswerSpinner from './components/UI/ChangeAnswerSpinner';
import { Route, Routes } from 'react-router-dom';
import DispensaryRoutes from './components/Dispensary/DispensaryRoutes';
import Dispensary from './components/Dispensary/Dispensary';

const Home = lazy(() => import('./components/Home'));


const InitialReactPage = () => {
  const { themeStore, intlStore } = useStores();
  return (
      <IntlProvider locale={intlStore.locale} messages={intlStore.messages} defaultLocale={IntlStore.DEFAULT_LOCAL}>
          <ThemeProvider theme={DEFAULT_THEME}>
              {themeStore.isLoadingTheme && <Loader />}
              {
                  <NotificationProvider>
                      <GlobalStyle theme={themeStore.theme} />
                      <Suspense fallback={<ChangeAnswerSpinner isVisible />}>
                          <Routes>
                              <Route
                                  path="/*"
                                  element={
                                          <Home />
                                      
                                  }
                              />
                              <Route
                                  path="/hello"
                                  element={
                                      <DispensaryRoutes>
                                          <Dispensary />
                                      </DispensaryRoutes>
                                  }
                              />
                          </Routes>
                      </Suspense>
                  </NotificationProvider>
              }
          </ThemeProvider>
      </IntlProvider>
  );
};

function App() { return(<InitialReactPage /> ) }

export default App;



const GlobalStyle = createGlobalStyle<{ theme: any }>`
   * {
        padding: 0;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;

        :not(input):not(textarea) {
            @media (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
            }
        }
    }

    ::before, ::after {
        box-sizing: inherit;
    }

    html, body {
        font-family: Montserrat;
        width: 100%;
        height: 100%;

        @media only screen and (max-width: ${MEDIUM_DEVICE_WIDTH}px) {
            overflow-x: hidden;
            position: relative;
            overscroll-behavior: none;
        }
    }

    h2 {
        font-family: Arial, sans-serif;
        font-weight: normal;
        font-size: 1.5rem; /* Adjust to your desired default font size */
        font-style: normal;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: inherit;
    }

    ::-webkit-scrollbar-thumb {
        background: #cccccc;
        border-radius: 3px;
    }
`;
