import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { useStores } from 'hooks/useStores';
import { IntlProvider } from 'react-intl';
import { IntlStore } from 'stores/IntlStore';
import { ThemeProvider } from 'styled-components';
import Loader from 'components/Loader';
import { DEFAULT_THEME } from 'stores/ThemeStore';
import DispensaryRoutesPageLayout from './components/Pages/Dispensary/DispensaryRoutesPageLayout';
import { Route } from 'react-router-dom';
import ChangeAnswerSpinner from 'components/UI/ChangeAnswerSpinner';
import { createRoot } from 'react-dom/client';

const App = () => {
  const { themeStore, intlStore } = useStores();
  const Home = lazy(() => import('./components/Pages/Home/Home'));
  const Contact = lazy(() => import('./components/Pages/Contact/Contact'));

  //const NotFound = lazy(() => import('./components/NotFound'));
  const Dispensary = lazy(
    () => import('./components/Pages/Dispensary/Dispensary')
  );

  return (
    <IntlProvider
      locale={intlStore.locale}
      messages={intlStore.messages}
      defaultLocale={IntlStore.DEFAULT_LOCAL}
    >
      <ThemeProvider theme={DEFAULT_THEME}>
        {themeStore.isLoadingTheme && <Loader />}
        <Suspense fallback={<ChangeAnswerSpinner isVisible />}>
          <Routes>
            <Route
              path="/home"
              element={
                <DispensaryRoutesPageLayout>
                  <Home />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <DispensaryRoutesPageLayout>
                  <Contact />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/investments"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/newsFeed"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/endeavors"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/projects"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/references"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="*"
              element={
                <DispensaryRoutesPageLayout>
                  <Home />
                </DispensaryRoutesPageLayout>
              }
            />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </IntlProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
