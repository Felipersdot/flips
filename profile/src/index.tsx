import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
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

const App = () => {
  const { themeStore, intlStore } = useStores();
  const Home = lazy(() => import('./components/Home'));
  const NotFound = lazy(() => import('./components/NotFound'));
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
              path="/dispensary"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/cbd101"
              element={
                <DispensaryRoutesPageLayout>
                  <Home />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/aboutme"
              element={
                <DispensaryRoutesPageLayout>
                  <Dispensary />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <DispensaryRoutesPageLayout>
                  <Home />
                </DispensaryRoutesPageLayout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </IntlProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
