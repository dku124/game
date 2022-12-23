import { Helmet } from 'react-helmet';
import './App.css';
import Layout from './component/layout/Layout';

import TagManager from 'react-gtm-module';
import code from './assets/data/code';
import ReactGA from 'react-ga4';

// Google Tag Manager and NoScript
const tagManagerArgs = {
  gtmId: code[0].tagManagerArgs,
};
TagManager.initialize(tagManagerArgs);

// Google tag (gtag.js)
ReactGA.initialize(code[0].gtagId);
ReactGA.send('pageview');

function App() {
  window.dataLayer.push({
    event: 'pageview',
  });
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
