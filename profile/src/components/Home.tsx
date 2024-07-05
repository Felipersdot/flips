import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useQuery } from '../hooks/useQuery';
// import { useStores } from '../hooks/useStores';
// import AlternativeList from './alternative/AlternativeList';
// import HomeConfigurator from './configurator/HomeConfigurator';
// import Loader from './Loader';
// import NotFound from './NotFound';

const Home: React.FC = () => {
  const query = useQuery();
  const templateId = query.get('templateId');
  const clientId = query.get('clientId');
  const exlineId = query.get('exlineId');
  const exquoteId = query.get('exquoteId');
  const alternativeId = query.get('alternativeId');

  // const { appStore } = useStores();
  // const { template, alternative } = templateStore;

  const CheckGuids = () => {
    const guidPattern = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i;

    const idsToCheck = [
      templateId,
      clientId,
      exlineId,
      exquoteId,
      alternativeId,
    ];

    for (const id of idsToCheck) {
      if (id && !guidPattern.test(id)) {
        console.log('One of your guids is entered incorrectly');
        return false;
      }
    }

    return true;
  };

  const AreGuidsValid = CheckGuids();

  useEffect(() => {
    const fetchData = async () => {
      if (!AreGuidsValid) {
        return;
      }
      if (exlineId != null && exquoteId != null) {
        // await templateStore.fetchAlternativeByLineIdAndQuoteId(exlineId, exquoteId, alternativeId);
      } else if (alternativeId) {
        // await templateStore.fetchAlternativeById(alternativeId);
      } else if (templateId) {
        // await templateStore.fetchTemplate(templateId, query);
      }
      // appStore.setPendoDataReady(true);
    };
    fetchData();
    // eslint-disable-next-line
  }, [templateId, exlineId, exquoteId]);

  return <></>;
};

export default observer(Home);
