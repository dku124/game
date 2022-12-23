import './App.css';
import Layout from './component/layout/Layout';

import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4';
import api from './assets/data/api';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(api[0].gameCode);

        // Google Tag Manager and NoScript
        const tagManagerArgs = {
          gtmId: res.data[0].tagManagerArgs,
        };
        TagManager.initialize(tagManagerArgs);
        window.dataLayer.push({
          event: 'pageview',
        });

        // Google tag (gtag.js)
        ReactGA.initialize(res.data[0].gtagId);
        ReactGA.send('pageview');
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
