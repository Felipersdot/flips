import React, { lazy } from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { useStores } from './hooks/useStores';
import { IntlStore } from './stores/IntlStore';
import { DEFAULT_THEME } from './stores/ThemeStore';
import Loader from './components/Loader';
import { Route } from 'react-router-dom';
import DispensaryRoutes from './components/Pages/Dispensary/DispensaryRoutesPageLayout';

const Home = lazy(() => import('./components/Home'));
const Dispensary = lazy(
  () => import('./components/Pages/Dispensary/Dispensary')
);

const InitialReactPage = () => {
  const { themeStore, intlStore } = useStores();
  return (
    <IntlProvider
      locale={intlStore.locale}
      messages={intlStore.messages}
      defaultLocale={IntlStore.DEFAULT_LOCAL}
    >
      <ThemeProvider theme={DEFAULT_THEME}>
        {themeStore.isLoadingTheme && <Loader />}
        {
          <DispensaryRoutes>
            <Route path="/*" element={<Home />} />
            <Route path="/hello" element={<Dispensary />} />
          </DispensaryRoutes>
        }
      </ThemeProvider>
    </IntlProvider>
  );
};

function App() {
  return <InitialReactPage />;
}

export default App;
