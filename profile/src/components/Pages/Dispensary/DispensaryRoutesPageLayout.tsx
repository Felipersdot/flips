import { observer } from 'mobx-react-lite';
import React, { Suspense } from 'react';
import { useIntl } from 'react-intl';
import { useStores } from '../../../hooks/useStores';
import DispensaryLayout from './DispensaryLayout';
import { Routes } from 'react-router-dom';
import ChangeAnswerSpinner from 'components/UI/ChangeAnswerSpinner';
import { MEDIUM_DEVICE_WIDTH } from 'utils/browserUtils';
import { createGlobalStyle } from 'styled-components';
import NotificationProvider from 'components/Notification/NotificationProvider';

const DispensaryRoutesPageLayout = ({ children }) => {
    const { appStore } = useStores();
    const { formatMessage: f } = useIntl();
    const { themeStore } = useStores();


    React.useEffect(() => {
        appStore.setPageTitle2(f({ id: 'MyHomes.PageTitle' }));
    }, [appStore, f]);


    return( 
    <NotificationProvider>

        <GlobalStyle theme={themeStore.theme} />
        <Suspense fallback={<ChangeAnswerSpinner isVisible />}>
        <DispensaryLayout>
            <Routes>{children}</Routes>
        </DispensaryLayout> 
        </Suspense> 
        </NotificationProvider>


        )};

        export default observer(DispensaryRoutesPageLayout);


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