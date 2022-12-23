import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import api from '../../../assets/data/api';

const Ads = () => {
  const [codeA, setCodeA] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(api[0].gameCode);
        setCodeA(res.data);
        const installGoogleAds = () => {
          const elem = document.createElement('script');
          elem.src = res.data[0].src;
          elem.async = true;
          elem.type = res.data[0].type;
          document.body.insertBefore(elem, document.body.firstChild);
        };
        installGoogleAds();
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  return (
    <>
      {codeA[0] && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={codeA[0].dataAdClient}
          data-ad-slot={codeA[0].dataAdSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
    </>
  );
};
export default Ads;
