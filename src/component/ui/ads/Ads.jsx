import React from 'react';
import { useEffect } from 'react';
import code from '../../../assets/data/code';

const Ads = () => {
  const { src, dataAdClient, dataAdSlot, type } = code[0];

  useEffect(() => {
    const installGoogleAds = () => {
      const elem = document.createElement('script');
      elem.src = src;
      elem.async = true;
      elem.type = type;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installGoogleAds();
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={dataAdClient}
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
export default Ads;
